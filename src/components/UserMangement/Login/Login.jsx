import "./Login.scss";
import Card from "../../Card/Card";
import AuthContext from "../../../context/auth-context";
import { useContext, useEffect,useState, useRef,useReducer } from "react";
import Input from "../../UI/Input";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const ctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [enteredEmail, setEnteredEmail] = useState('');
   const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
   const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
  };
  
  const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
  };
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const error ={
    emailError:"",
    passwordError:""
  }
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };


  const submitHandler = (event) => {
    event.preventDefault();

   if(formIsValid){
    ctx.onLogin(emailState.value, passwordState.value);
   }
   else if (!emailIsValid) {
    emailInputRef.current.focus();
  } else {
    passwordInputRef.current.focus();
  }
  };

  
  return (
    <>
      <div className="login-wrapper">
        <div className="left">
          <span className="header-left">Learn to code by watching others</span>
          <span className="info-left">See how experienced developer solve problems in real-time. Watching scripted tutorial is great but understanding how developer think is invaluable.</span>
        </div>
        <div className="right">
          <Card title={"LOGIN"} className="login-card">
            <form className="form" onSubmit={submitHandler}>
              {/* <input
                ref={emailInputRef}
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                placeholder="Enter your Email"
              /> */}
              <Input
                id="user-email"
                type="email"
                placeholder="Enter your email."
                name="email"
                ref={emailInputRef}
                // register={register("email", { required: true })}
                isValid={emailIsValid}
                 value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              ></Input>
              <div className="form-border"></div>
              <br></br>
              {/* <input
                ref={passwordInputRef}
                id="user-password"
                className="form-content"
                type="password"
                placeholder="Enter your password"
                name="password"
              /> */}
              <Input
                id="user-password"
                type="password"
                placeholder="Enter your password."
                name="password"
                ref={passwordInputRef}
                // register={register("password", { required: true })}
                isValid={passwordIsValid}
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              ></Input>
              <div className="form-border"></div>
              <a href="#">Forgot password?</a>
              <br></br>
              <button type="button">LOGIN</button>
              <a href="#" id="signup">
                Don't have account yet?
              </a>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
