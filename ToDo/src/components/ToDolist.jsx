import React from "react";
import Item from "./Item";

const ToDolist=({taskList})=>{

    const todoitemlist=()=>{
        
        let size = taskList.filter((e)=>(e.isInProgress==false && e.isCompleted==false))
        return (size);
      }
    return(
        <div className="listdiv">
            <p className="listname">To-Do</p>
            <div type="none" className="list todoList" id="todo"> 
                {todoitemlist().map((e)=>{
                    return <Item key={e.id} name={e.name}></Item>
                })}
            </div>
        </div>
        
    )
}

export default ToDolist;