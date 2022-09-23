import "./Popup.scss";

function Popup({children, showPopup , handleClickOutside }){

    const header = "Add New Task";

    function stopPropagation(event){
        event.preventDefault();
        event.stopPropagation();
    }

    if(showPopup){
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        return(
            <>
                <div className="popup-backdrop" onClick={handleClickOutside} >
                </div>
                <div className="popup-container" onClick={handleClickOutside}>
                    <div className="popup-actual" onClick={stopPropagation}> 
                            <div className="header">
                                {header}
                            </div>
                        {children}
                        </div>
                    
                </div>
            </>
    
        )
    } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        return null;
    }

}

export default Popup