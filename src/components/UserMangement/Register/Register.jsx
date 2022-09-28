import "./Register.scss";
import Card from "./../../Card/Card";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Register() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    fname: Yup.string().required("First Name is mendatory"),
    lname: Yup.string().required("Last Name is mendatory"),
    email: Yup.string().required("Email is mendatory"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

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
              <input
                id="fname"
                className="form-content"
                type="text"
                placeholder="Enter your first name."
                name="fname"
                {...register("fname", { required: true })}
              />
              <span className="error-info">{errors.fname?.message}</span>
              <br></br>
              <input
                id="last-name"
                className="form-content"
                type="text"
                placeholder="Enter your last name."
                name="lname"
                {...register("lname", { required: true })}
              />
              <span className="error-info">{errors.lname?.message}</span>
              {/* {errors.lname && <span className="error-info">This field is required</span>} */}
              <br></br>
              <input
                id="email"
                className="form-content"
                type="email"
                placeholder="Enter your email address."
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              <span className="error-info">{errors.email?.message}</span>
              <br></br>
              <input
                id="password"
                type="password"
                placeholder="Enter your password."
                name="password"
                {...register("password", { required: true })}
                className="form-content"
              />
              <span className="error-info">{errors.password?.message}</span>
              {/* {errors.password && <span className="error-info">This field is required</span>} */}
              <br></br>
              <input
                id="confirmPwd"
                className="form-content"
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"
                {...register("confirmPwd", { required: true })}
              />
              <span className="error-info">{errors.confirmPwd?.message}</span>
              {/* {errors.confirmPwd && <span className="error-info">This field is required</span>} */}

              <br></br>
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
