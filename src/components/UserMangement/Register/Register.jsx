import "./Register.scss";
import Card from "./../../Card/Card";
function Register(){

    return(
        <>
             <div className="wrapper">
              <div className="left">
                <h1>Game of Thrones</h1>
                <h3>Welcome to Dragonstone</h3>
              </div>
              <div className="right">
          
      <Card title={"REGISTER"}>
      <form  className="form">
     
     <input id="user-email" className="form-content" type="email"
     placeholder="Please enter your first name."
     name="email"  />
    
   <br></br>
     <input id="user-email" className="form-content" type="email" 
     placeholder="Please enter your last name."
     name="email"  />
    
     
     <br></br>
     <input id="user-email" className="form-content" type="email" 
     placeholder="Please enter your email address."
     name="email"  />
     
    <br></br>
     <input id="user-password" className="form-content" type="password"
     placeholder="Enter your password."
      name="password"  />

     <br></br>
     <input id="user-password" className="form-content" type="password" 
     placeholder="Confirm Password"
     name="password"  />
 
    
  
     <br></br>
     <button type="submit">Sign Up</button>
     <small>
                By Clicking on the button you are agreeing to our <a href="#" id="signup">tearms and conditions.</a>
              </small>
   </form>
      </Card>
       
     
            </div>
              </div>
        </>
    )
}

export default Register