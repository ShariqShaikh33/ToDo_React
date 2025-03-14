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
            <div className={prop.top+" TaskTop"}>
                <div className="TaskName">{prop.taskTime}</div>
                <button className="deleteBtn" onClick={()=>{deleteT(prop.id)}}><span className={prop.top+" material-symbols-outlined"}>delete</span></button>
            </div>
            <div className="TaskMid">
                <div className="TaskDesc">{prop.taskName}</div>
                <div className="MidBtnDiv">
                    <button onClick={()=>{startT(prop.id)}} className={"MidBtn BlueListBack "+prop.start}>Start</button>
                    <button onClick={()=>{completeT(prop.id)}} className={"MidBtn "+prop.done}>Done</button>
                </div>
            </div>
            <div className="TaskBottom">
                <div className="SubTask"></div>
                <button className={prop.top+" addSubTaskBtn"}>+</button>
            </div>
        </div>
    )
}

export default TaskCard;