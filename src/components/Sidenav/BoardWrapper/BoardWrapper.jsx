import "./../BoardMenu/BoardMenu.scss";
import BoardMenu from "./../BoardMenu/BoardMenu";

function BoardWrapper(props){


    function createNewBoard(){
        console.log("Create new Board");
    }
    let newBoardAdd = () =>{
        return(
            <div className="board-item" >
                <i className="fa-solid fa-table-list"></i>
                <input type="text"/> 
                <i className="fa-solid fa-xmark"></i>
            </div>
        )
    }
    const menuitems = props.menu.map( x=> {
        return(
            <BoardMenu board={x} key={x.id} setActive={props.setActive}/>
        )
    })

    return(
        <div className="boardmenu-container">
           
            {menuitems}
            {newBoardAdd()}
            <div className="board-item create-new-board" onClick={createNewBoard}>
                <i className="fa-solid fa-table-list"></i>
                <span onClick={(event) => console.log(event)}> + Create New Board</span>
            </div>
        </div>
    )
}

export default BoardWrapper