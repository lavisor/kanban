import { useState } from "react";
import Sidenav from "./../Sidenav/Sidenav";
import MainBoard from "./../MainBoard/MainBoard";
import Popup from "../Popup/Popup";
import "./Home.scss";
function Home(){

  const [popupAction , setPopupAction] = useState(false);

  function closePopup(){
    console.log("popup should close");
    setPopupAction(false);
  }

  function openPopup(){
    console.log("popup should open");
    setPopupAction(true);
  }

  return(
    <div className="home-component">
      <Sidenav />
      <div id="mainContainer" className="main-container">
        <div className="inside-component">
          <div>
          <button onClick={openPopup}> + Add New Task </button>
          </div>
          <MainBoard />
        </div>
      </div>

       {/* add popup here */}
       <Popup showPopup={popupAction} handleClickOutside={closePopup}/>
    </div>
  )
}

export default Home
