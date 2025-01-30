import React from "react";
import App from "./App";
import Item from "./Item";

const ToDolist=(todo)=>{
    console.log(todo.todo);
    return(
        <div className="listdiv">
            <p className="listname">To-Do</p>
            <div type="none" className="list todoList" id="todo"> 
                {todo.todo?.map((e)=>{
                    return <Item key={e.id} name={e.name}></Item>
                })}
            </div>
        </div>
        
    )
}

export default ToDolist;