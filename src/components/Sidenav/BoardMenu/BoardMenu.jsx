import "./BoardMenu.scss";

function BoardMenu({board, setActive}){

function makeActive(event){
    let identifier = null;
    if(event.currentTarget.tagName === "span" || event.currentTarget.tagName === "i"){
        identifier = event.currentTarget.parentElement.getAttribute("data-identifier");
    }
    identifier = event.currentTarget.getAttribute("data-identifier");
    setActive(identifier);
}

return(
    <div className={ board.isActive? "board-item item-active": "board-item"} onClick={makeActive} data-identifier={board.id}>
        <i className="fa-solid fa-table-list"></i>
        <span> {board.name}</span>
    </div>
)
}

export default BoardMenu