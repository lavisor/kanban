import "./Popup.scss";

function Popup({header , footer , content , showPopup }){

    if(showPopup){
        return(
            <>
                <div className="popup-backdrop">
    
                </div>
                <div className="popup-container">
                    <div clasName="popup-container-header"> {header} </div>
                    <div clasName="popup-container-content"> Content</div>
                    <div clasName="popup-container-footer"> Footer </div>
                </div>
            </>
    
        )
    } else {
        return null;
    }

}

export default Popup