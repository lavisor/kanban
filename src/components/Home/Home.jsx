import Sidenav from "./../Sidenav/Sidenav";
import MainBoard from "./../MainBoard/MainBoard";
import "./Home.scss";
function Home(){


  return(
    <div className="home-component">
      <Sidenav />
      <div id="mainContainer" className="main-container">
        <div className="inside-component">
          <div>
          <button> + Add New Task </button>
          </div>
          <MainBoard />
        </div>
      </div>

       {/* add popup here */}
    </div>
  )
}

export default Home
