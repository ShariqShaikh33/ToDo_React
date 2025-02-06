import React from "react";
import "../componentCSS/AddForm.css"

const AddTask=({setTaskList})=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        const datevalue = event.target.ondate.value;
        setTaskList((prevTodos) => [
          ...prevTodos,
          { name: value, id: self.crypto.randomUUID(), date: datevalue, isInProgress: false, isCompleted: false},
        ]);
        event.target.reset();
    };
    return(
        <div className="mainFormdiv">
            <form className="mainForm" onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todo" className="addTaskBar" placeholder="Add a new Task"></input>
                <input type="date" id="ondate"></input>
                <button type="submit" className="addTaskBtn">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;