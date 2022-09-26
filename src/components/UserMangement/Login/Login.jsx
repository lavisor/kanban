import "./Login.scss";
import Card from "../../Card/Card";
function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <h1>Game of Thrones</h1>
          <h3>Welcome to Dragonstone</h3>
        </div>
        <div className="right">
          <Card title={"LOGIN"}>
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
              <button type="submit">LOGIN</button>
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
