import "./../BoardMenu/BoardMenu.scss";
import BoardMenu from "./../BoardMenu/BoardMenu";

function BoardWrapper(props){
    
    const { enableEditField, menu, toggleEdit } = props;
    console.log("Menu: ", menu);
    function createNewBoard(){
        console.log("Create new Board");
    }

    let newBoardAdd = () =>{
        return(
            <>
            { enableEditField &&  <div className="board-item new-board-item fade-in" >
                <i className="fa-solid fa-table-list"></i>
                <input type="text"/> 
                <i class="fa-solid fa-floppy-disk"></i>
                <i className="fa-solid fa-xmark" onClick={()=>{ toggleEdit(false) }}></i>
            </div>
            }
            </>
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
            <div className="board-item create-new-board fade-in" onClick={createNewBoard}>
                <i className="fa-solid fa-table-list"></i>
                <span onClick={()=>{ toggleEdit(true) }}> + Create New Board</span>
            </div>
        </div>
    )
}

export default BoardWrapper