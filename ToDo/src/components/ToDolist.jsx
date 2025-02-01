import React from "react";
import Item from "./Item";

const ToDolist=({taskList, setTaskList})=>{
    
    const todoitemlist=()=>{
        console.log(taskList);
        let size = taskList.filter((e)=>(e.isInProgress==false && e.isCompleted==false))
        console.log(size);
        return (size);
      }
    return(
        <div className="listdiv">
            <p className="listname">To-Do</p>
            
            <div type="none" className="list todoList" id="todo"> 
                {todoitemlist().map((e)=>{
                    return <Item key={e.id} id={e.id} taskList={taskList} setTaskList={setTaskList} name={e.name} button1={"active"} button2={"active"}></Item>
                })}
            </div>
        </div>
        
    )
}

export default ToDolist;