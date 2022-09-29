import "./Login.scss";
import Card from "../../Card/Card";
import AuthContext from "../../../context/auth-context";
import { useContext } from "react";

function Login() {

  const ctx = useContext(AuthContext);
  return (
    <>
      <div className="login-wrapper">
        <div className="left">
          <span className="header-left">Learn to code by watching others</span>
          <span className="info-left">See how experienced developer solve problems in real-time. Watching scripted tutorial is great but understanding how developer think is invaluable.</span>
        </div>
        <div className="right">
          <Card title={"LOGIN"} className="login-card">
            <form className="form">
              <input
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
              <div className="form-border"></div>
              <br></br>
              <input
                id="user-password"
                className="form-content"
                type="password"
                placeholder="Enter your password"
                name="password"
              />
              <div className="form-border"></div>
              <a href="#">Forgot password?</a>
              <br></br>
              <button type="button" onClick={ctx.login}>LOGIN</button>
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
