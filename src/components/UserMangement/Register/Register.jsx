import "./Register.scss";
import Card from "./../../Card/Card";
import { useForm } from "react-hook-form";
import { useState, useRef,useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  registerFormValidation,
  confirmPasswordValidation,
} from "../../../helper/formValidationHelper";
import Input from "../../UI/Input";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
 const [enteredFname, setEnteredFname] = useState("");
  const [enteredLname, setEnteredLname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const [isValid, setValid] = useState(false);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onSubmit = () => {
    // registerFormValidation();
    console.log("submit",isValid);
    if(isValid){
      console.log("submit");
    }
    else if(enteredFname.length==0 || error?.fnameError !=""){
      console.log("fname");
      console.log("fname",fnameRef.current.value);
      fnameRef.current.focus();
    }
    else if(enteredLname.length==0 || error?.lnameError !=""){
      lnameRef.current.focus();
    }
    else if(enteredEmail.length==0 || error?.emailError !=""){
      emailRef.current.focus();
    }
    else if(enteredPassword.length== 0 || error?.passwordError !=""){
      passwordRef.current.focus();
    }
    else if(enteredConfirmPassword.length==0 || error?.confirmPasswordError !=""){
      confirmPasswordRef.current.focus();
    }
  };
  const inputHandler = (event) => {
    setError(registerFormValidation(event, error));
  };

  const validate = () => {
    console.log("enteredFname.length",enteredFname.length,!error?.fnameError);
    console.log("enteredLname.length",enteredLname.length,!error?.lnameError);
    console.log("enteredEmail.length",enteredEmail.length,!error?.emailError);
    console.log("enteredPassword.length",enteredPassword.length,!error?.passwordError);
    console.log("enteredConfirmPassword.length",enteredConfirmPassword.length,!error?.confirmPasswordError);
    return  enteredFname.length && enteredLname.length && enteredEmail.length && enteredPassword.length &&enteredConfirmPassword.length && !error?.fnameError && !error?.lnameError  && !error?.emailError && !error?.passwordError && !error?.confirmPasswordError;
  };
  useEffect(() => {
    const isValid = validate();
    console.log("useEffect",isValid);
    setValid(isValid);
  }, [enteredFname,enteredLname,enteredEmail,enteredPassword, enteredConfirmPassword, error]);
  
  const fnameChangeHandler = (event)=>{
    setEnteredFname(event.target.value);
  }
  const lnameChangeHandler = (event)=>{
    setEnteredLname(event.target.value);
  }
  const emailChangeHandler = (event)=>{
    setEnteredEmail(event.target.value);
  }
  const passwordChangeHandler = (event)=>{
    setEnteredPassword(event.target.value);
  }
  const confirmPasswordChangeHandler = (event)=>{
    setEnteredConfirmPassword(event.target.value);
  }
 
  return (
    <>
      <div className="register-wrapper">
        <div className="left">
          <h1>Game of Thrones</h1>
          <h3>Welcome to Dragonstone</h3>
        </div>
        <div className="right">
          <Card title={"REGISTER"}>
            <div className="form">
              <div className="form-field">
                <Input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name."
                  name="fname"
                  ref={fnameRef}
                  register={register("fname", { required: true })}
                  onChange={fnameChangeHandler}
                  onBlur={inputHandler}
                  error={error?.fnameError}
                ></Input>
              </div>

              <div className="form-field">
                <Input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name."
                  name="lname"
                  ref={lnameRef}
                  register={register("lname", { required: true })}
                  onChange={lnameChangeHandler}
                  onBlur={inputHandler}
                  error={error?.lnameError}
                ></Input>
              </div>
              <div className="form-field">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email."
                  name="email"
                  ref={emailRef}
                  register={register("email", { required: true })}
                  onChange={emailChangeHandler}
                  onBlur={inputHandler}
                  error={error?.emailError}
                ></Input>
              </div>
  
              <div className="form-field">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password."
                  name="password"
                  ref={passwordRef}
                  register={register("password", { required: true })}
                  onChange={passwordChangeHandler}
                  onBlur={inputHandler}
                  error={error?.passwordError}
                ></Input>
              </div>

              <div className="form-field">
                <Input
                  id="confirmPwd"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  ref={confirmPasswordRef}
                  register={register("confirmPwd", { required: true })}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={inputHandler}
                  error={error?.confirmPwdError}
                ></Input>
              </div>
              <button type="submit" onClick={onSubmit}>Sign Up</button>
              <small>
                By Clicking on the button you are agreeing to our{" "}
                <a href="#" id="signup">
                  tearms and conditions.
                </a>
              </small>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Register;
