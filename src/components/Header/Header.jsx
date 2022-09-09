import './Header.scss'

function Header(){

  return(
    <div className="header-container">
      <div className="header-container-navicon">
        <i className="fa-sharp fa-solid fa-bars"></i>
        <span>kanban</span>
      </div>
      <div className="header-container-navbuttons">

        <button> Login </button>
        <button> Signup </button>
      </div>

    </div>
  )
}


export default Header
