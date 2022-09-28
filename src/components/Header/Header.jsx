import { useNavigate   } from 'react-router-dom';
import { useAuthValue } from '../../context/Auth-context';
import './Header.scss';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useEffect,useState} from 'react';

function Header(){
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  console.log(location)
const isLogInPage = location.pathname.includes('login');
const isRegisterPage = location.pathname.includes('register');
console.log(isLogInPage);
  
  console.log(params);

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

{!isLogInPage &&
 <button onClick={navigateToLogin}> Login </button>
 
 }
{!isRegisterPage &&
    <button onClick={navigateToSignUp}> Signup </button>   
}
      </div>

    </div>
  )
}


export default Header
