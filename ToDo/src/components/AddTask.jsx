import React from "react";
import App from "./App";

const AddTask=(prop)=>{
    return(
        <div className="mainFormdiv">
            <form className="mainForm">
                <input className="addTaskBar" placeholder="Add a new Task"></input>
                <button className="addTaskBtn">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;