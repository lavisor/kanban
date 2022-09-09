import './Sidenav.scss';
import BoardWrapper from "./BoardWrapper/BoardWrapper";
import { useState } from "react";


function Sidenav(){
    const [ boardList , setBoardList ] = useState([
        {name:"PlatForm Launch", id: 1, isActive: true},
        {name:"Marketing Plan", id: 2, isActive: false},
        {name:"Roadmap", id: 3 , isActive: false}
    ]);

    const [sidenavOpen , setSidenavOpen] = useState(false);

    function setActive(index){
        setBoardList((prevVal) => {
            let boards = [...prevVal];
            boards.map( x=> {
                if(x.id === parseInt(index)){
                    x.isActive = true;
                } else {
                    x.isActive = false;
                }
                return x;
            });
            return boards;
        })
    }

    function toggleSideMenu(event){
        if(sidenavOpen){
            document.getElementById("sidenav").classList.add("side-nav-hidden");
            document.getElementById("menubtn").classList.add("menu-Button-open");
            document.getElementById("mainContainer").classList.add("remove-margin");
            setSidenavOpen(false);
        } else {
            document.getElementById("sidenav").classList.remove("side-nav-hidden");
            document.getElementById("menubtn").classList.remove("menu-Button-open");
            document.getElementById("mainContainer").classList.remove("remove-margin");
            setSidenavOpen(true);
        }



    }

    return(
        <div id="sidenav" className="sidenav-contianer">
            <div className="sidenav-contianer-header">
                <i className="fa-sharp fa-solid fa-bars"></i>
                <span>kanban</span>

                <div id="menubtn" className="menu-Button" onClick={toggleSideMenu}> <i className="fa-solid fa-arrow-right"></i> </div>
            </div>
            <div className="sidenav-contianer-menus">
                <span className="heading">
                    ALL BOARDS (8)
                </span>
                <BoardWrapper menu={boardList} setActive={setActive}/>
            </div>
        </div>
    )
}


export default Sidenav