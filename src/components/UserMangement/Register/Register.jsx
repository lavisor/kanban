import "./Register.scss";

function Register(){

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
        <h2>REGISTER</h2>
        <div className="underline-title"></div>
      </div>
      <form method="post" className="form">
      <label>
            &nbsp;First Name
          </label>
        <input id="user-email" className="form-content" type="email" name="email"  />
       
        <label>
            &nbsp;Last Name
          </label>
        <input id="user-email" className="form-content" type="email" name="email"  />
       
        <label>
            &nbsp;Email
          </label>
        <input id="user-email" className="form-content" type="email" name="email"  />
        
        <label>&nbsp;Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password"  />

        <label>&nbsp;Confirm Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password"  />
    
       
     
        <br></br>
        <button type="submit">Sign Up</button>
       
      </form>
    </div>
  </div>
                </div>
            
              </div>
        </>
    )
}

export default Register