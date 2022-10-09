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
  const [confirmPasswordError, setConformPasswordError] = useState(null);
  const passwordRef = useRef(null);
  // const confirmPasswordRef = useRef(null);
  const onSubmit = (data) => {
    // registerFormValidation();
    console.log(data);
  };
  const inputHandler = (event) => {
    setError(registerFormValidation(event, error));
  };

  // const confirmPasswordHandler = (event) => {
  //   setConformPasswordError(
  //     confirmPasswordValidation(event, passwordRef.current.value)
  //   );
  // };
  // const validate = () => {
  //   return fname.length & lname.length & email.length & password.length && confirmPassword.length && error.fnameError === "" && error.lnameError === "" && error.emailError === "" && error.passwordError === "" && error.confirmPasswordError === "" ? true : false;
  // };
  // useEffect(() => {
  //   const isValid = validate();
  //   setValid(isValid);
  // }, [fname, lname,email, password, confirmPassword, error]);
  return (
    <>
      <div className="register-wrapper">
        <div className="left">
          <h1>Game of Thrones</h1>
          <h3>Welcome to Dragonstone</h3>
        </div>
        <div className="right">
          <Card title={"REGISTER"}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-field">
                {/* <input
                id="fname"
                className="form-content"
                type="text"
                placeholder="Enter your first name."
                name="fname"
                {...register("fname", { required: true })}
                onBlur={inputHandler}
              />
              {error && error.fnameError && <span className="error-info">{error.fnameError}</span>} */}
                <Input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name."
                  name="fname"
                  register={register("fname", { required: true })}
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
                  register={register("lname", { required: true })}
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
                  register={register("email", { required: true })}
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
                  register={register("password", { required: true })}
                  onBlur={inputHandler}
                  error={error?.passwordError}
                ></Input>
              </div>
              {/* <input
                id="confirmPwd"
                className="form-content"
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"
                {...register("confirmPwd", { required: true })}
                onBlur={confirmPasswordHandler}
               
              />
              {confirmPasswordError && <span className="error-info">{confirmPasswordError}</span>} */}

              <div className="form-field">
                <Input
                  id="confirmPwd"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  register={register("confirmPwd", { required: true })}
                  onBlur={inputHandler}
                  error={error?.confirmPwdError}
                ></Input>
              </div>
              <button type="submit">Sign Up</button>
              <small>
                By Clicking on the button you are agreeing to our{" "}
                <a href="#" id="signup">
                  tearms and conditions.
                </a>
              </small>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Register;
