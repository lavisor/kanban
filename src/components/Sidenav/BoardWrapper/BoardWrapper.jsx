import "./../BoardMenu/BoardMenu.scss";
import BoardMenu from "./../BoardMenu/BoardMenu";

function BoardWrapper(props){


    function createNewBoard(){
        console.log("Create new Board");
    }

    const menuitems = props.menu.map( x=> {
        return(
            <BoardMenu board={x} key={x.id} setActive={props.setActive}/>
        )
    })

    return(
        <div className="boardmenu-container">
            {menuitems}
            <div className="board-item create-new-board" onClick={createNewBoard}>
                <i className="fa-solid fa-table-list"></i>
                <span> + Create New Board</span>
            </div>
        </div>
    )
}

export default BoardWrapper