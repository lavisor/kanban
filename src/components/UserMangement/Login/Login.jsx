import "./Login.scss";

function Login(){

    return(
        <>
            <div className="wrapper">
              <div className="left">
                <h1>Game of Thrones</h1>
                <h3>Welcome to Dragonstone</h3>
              </div>
              <div className="right">
              <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>LOGIN</h2>
        <div className="underline-title"></div>
      </div>
      <form method="post" className="form">
        <label>
            &nbsp;Email
          </label>
        <input id="user-email" className="form-content" type="email" name="email"/>
        <div className="form-border"></div>
        <label>&nbsp;Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password"/>
        <div className="form-border"></div>
        <a href="#">
          Forgot password?
        </a>
        <br></br>
        <button type="submit">LOGIN</button>
        <a href="#" id="signup">Don't have account yet?</a>
      </form>
    </div>
  </div>
                </div>
            
              </div>
            
        </>
    )
}

export default Login