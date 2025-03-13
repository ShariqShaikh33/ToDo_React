import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {deleteTask, startTask, completeTask} from "../redux files/Slices/addTaskSlice"
import "../styles/taskCard.css";

const TaskCard=(prop)=>{
    const dispatch = useDispatch();
    const deleteT=(id)=>{
        dispatch(deleteTask(id));
    }
    const startT=(id)=>{
        dispatch(startTask(id));
    }
    const completeT=(id)=>{
        dispatch(completeTask(id));
    }
    return(
        <div className="TaskCardMainDiv">
            <div className="TaskTop">
                <div className="TaskName">{prop.taskName}</div>
                <button onClick={()=>{deleteT(prop.id)}}>Delete</button>
            </div>
            <div className="TaskMid">
                <div className="TaskDesc">{prop.taskDesc}</div>
                <div className="MidBtnDiv">
                    <button onClick={()=>{startT(prop.id)}} className={"MidBtn "+prop.start}>Start</button>
                    <button onClick={()=>{completeT(prop.id)}} className={"MidBtn "+prop.done}>Done</button>
                </div>
            </div>
            <div className="TaskBottom">
                <div className="SubTask"></div>
                <button>+</button>
            </div>
        </div>
    )
}

export default TaskCard;