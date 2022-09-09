import { useEffect, useState } from "react";
import { dummyTask } from "../../constants/constants";
import TaskCard from "../Task/TaskCard/TaskCard";
import "./MainBoard.scss";

function MainBoard(){

    const [ taskList , setTaskList] = useState(dummyTask);
    const [ todoList , setTodoList ] = useState([])
    const [ doingList , setDoingList ] = useState([])
    const [ doneList , setDoneList ] = useState([])

    useEffect(()=> {
        setTodoList( taskList.filter(x => x.status === "todo") );
        setDoingList( taskList.filter(x => x.status === "doing") );
        setDoneList(taskList.filter(x => x.status === "done")) ;
    }, [taskList])

    return (
        <div className="main-board-container">
            <div className="task-status-container">
                <div className=""> <i className="fa-solid fa-circle todo-circle"></i> <span>TODO ({todoList.length})</span> </div>
                {todoList.map( task=> {
                    return (
                        <TaskCard key={task.id} task={task} />
                    )
                }) }
            </div>
            <div className="task-status-container">
                <div> <i className="fa-solid fa-circle doing-circle"></i>  <span>DOING ({doingList.length})</span></div>
                {doingList.map( task=> {
                    return (
                        <TaskCard key={task.id} task={task} />
                    )
                }) }
            </div>
            <div className="task-status-container">
                <div> <i className="fa-solid fa-circle done-circle"></i> <span>DONE ({doneList.length})</span></div>
                {doneList.map( task=> {
                    return (
                        <TaskCard key={task.id} task={task} />
                    )
                }) }
            </div>
        </div>
    )
}

export default MainBoard