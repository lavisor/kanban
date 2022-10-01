import { useState } from "react";
import Sidenav from "./../Sidenav/Sidenav";
import MainBoard from "./../MainBoard/MainBoard";
import Popup from "../Popup/Popup";
import AddTask from "../AddTask/AddTask";
import { useParams } from 'react-router';
import "./Home.scss";
function Home(props){

  const [popupAction , setPopupAction] = useState(false);
  const { id } = useParams();
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
      <Sidenav currentBoard={id} />
      <div id="mainContainer" className="main-container">
        <div className="inside-component">
          <div>
          <button onClick={openPopup}> + Add New Task </button>
          </div>
          <MainBoard currentBoard={id} />
        </div>
      </div>

       {/* add popup here */}
       <Popup showPopup={popupAction} handleClickOutside={closePopup} children={<AddTask/>}> 
       </Popup>
    </div>
  )
}

export default Home
