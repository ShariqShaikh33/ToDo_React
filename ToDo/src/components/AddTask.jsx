import React from "react";
import "../componentCSS/AddForm.css"

const AddTask=({setTaskList})=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        const date = event.target.ondate.value;
        const time = event.target.attime.value;
        setTaskList((prevTodos) => [
          ...prevTodos,
          { name: value, id: self.crypto.randomUUID(),time: time, date: date, isInProgress: false, isCompleted: false},
        ]);
        event.target.reset();
    };

    let minD= "";
    const minDateSetter=()=>{
        let nDate = new Date();
        let year = nDate.getFullYear();
        let month = nDate.getMonth()+1;
        if(month<10){
            month = "0"+month;
        }
        let date = nDate.getDate();
        if(date<10){
            date = "0"+date;
        }
        minD = `${year}-${month}-${date}`;
    }
    minDateSetter();

    let minTime = "";
    const minTimeSetter=()=>{
        let nTime = new Date();
        let hour = nTime.getHours();
        let minute = nTime.getMinutes();
        
        minTime = `${hour}:${minute}`;
    }
    minTimeSetter();

    
    return(
        <div className="mainFormdiv">
            <form className="mainForm" onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todo" className="addTaskBar" placeholder="Add a new Task"></input>
                <input type="date" id="ondate" min={minD} ></input>
                <input type="time" id="attime" min={minTime}></input>
                <button type="submit" className="addTaskBtn">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;