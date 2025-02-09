import React from "react";
import "../componentCSS/AddForm.css"

const AddTask=({setTaskList})=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        const desc = event.target.desc.value;
        const date = event.target.ondate.value;
        const time = event.target.attime.value;
        console.log(time);
        setTaskList((prevTodos) => [
          ...prevTodos,
          { name: value,desc: desc, id: self.crypto.randomUUID(),time: time, date: date, isInProgress: false, isCompleted: false},
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
                <div className="taskTitleDiv">
                    <label for="todo">Task Title</label>
                    <input type="text" name="todo" id="todo" className="addTaskBar" placeholder="Add a new Task"></input>
                </div>
                <div className="taskDescDiv">
                    <label for="desc">Add a Description</label>
                    <textarea name="desc" id="desc" placeholder="Write a description..."></textarea>
                </div>
                <div className="taskDateDiv">
                    <label for="date">On </label>
                    <input type="date" id="ondate" min={minD} ></input>
                </div>
                <div className="taskTimeDiv">
                    <label for="time">At </label>
                    <input type="time" id="time" min={minTime}></input>
                </div>
                
                <button type="submit" className="addTaskBtn">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;