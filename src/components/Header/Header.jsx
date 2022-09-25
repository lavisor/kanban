import { useNavigate   } from 'react-router-dom';
import { useAuthValue } from '../../context/Auth-context';
import './Header.scss'

function Header(){
  const navigate = useNavigate();

  function getUserDetails(){
    //const {currentUser} = useAuthValue();
    //console.log("Current User: ", currentUser);
  }


  function navigateToLogin(){
    console.log("this will navigate to login page. ");
    navigate("login");
  }

  function navigateToSignUp(){
    console.log("this will navigate to register page. ");
    navigate("register");
  }

  function navigateToLandingPage(){
    console.log("this will navigate to register page. ");
    navigate("");
  }

  return(
    <div className="header-container">
      <div className="header-container-navicon" onClick={navigateToLandingPage}>
        <i className="fa-sharp fa-solid fa-bars"></i>
        <span>kanban</span>
      </div>
      <div className="header-container-navbuttons">

        <button onClick={navigateToLogin}> Login </button>
        <button onClick={navigateToSignUp}> Signup </button>
      </div>

    </div>
  )
}


export default Header
