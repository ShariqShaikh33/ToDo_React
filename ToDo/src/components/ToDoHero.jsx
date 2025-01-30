import React from "react";

const ToDoHero=(prop)=>{
    return(
        <div>
            <p>ToDo App</p>
            <div className="counter">
                <p>Task Remaining: </p>
                <p>{prop.todo_size}</p>
            </div>
            <div className="counter">
                <p>Task In-Progress: </p>
                <p>{prop.progress_size}</p>
            </div>
            <div className="counter">
                <p>Task Completed: </p>
                <p>{prop.done_size}</p>
            </div>
        </div>
    )
}

export default ToDoHero;