import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import "./AddTask.scss";


function AddTask(){

    const themeContext = useContext(ThemeContext);

    const titlePlaceHolder = "e.g. Take coffee break";
    const subtaskPlaceHolder = "e.g. Make coffee";
    const descriptionPlaceholder = "e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.";

    return (
        <>
            <div className="form-item">
                <div className="label-container">
                   {themeContext.theme == "dark" && "Title dark" } 
                   {themeContext.theme != "dark" && "Light" } 
                </div>
                <div className="input-container">
                    <input id="titleInput" type="text" placeholder={titlePlaceHolder} />
                </div>
            </div>

                            <div className="form-item">
                                <div className="label-container">
                                    Description
                                </div>
                                <div className="input-container">
                                    <textarea id="descriptionInput" placeholder={descriptionPlaceholder} ></textarea>
                                </div>
                            </div>

                            <div className="form-item">
                                <div className="label-container">
                                    Subtask
                                </div>
                                <div className="subTasks">

                                </div>
                                <div className="input-container" >
                                    <input id="subtaskInput" type="text" placeholder={subtaskPlaceHolder} /> <button className="add-subtask-button"> Add subtask </button>
                                </div>
                            </div>

                            <div className="form-item">
                                <div className="label-container">
                                    Status
                                </div>
                                <div className="input-container">
                                    <select id="subtaskInput" type="text" placeholder={subtaskPlaceHolder} > 
                                        <option name="taskStatus" selected value="todo"> Todo </option>
                                        <option name="taskStatus" value="doing"> Doing </option>
                                        <option name="taskStatus" value="done"> Done </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-item">
                               <button> Create Task</button>
                            </div>
        
        </>
    )
}

export default AddTask