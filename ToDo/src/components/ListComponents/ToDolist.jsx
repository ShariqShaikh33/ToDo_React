import React from "react";
import Item from "../Item";

const ToDolist=({taskList, setTaskList})=>{
    
    const todoitemlist=()=>{
        console.log(taskList);
        let size = taskList.filter((e)=>(e.isInProgress==false && e.isCompleted==false))
        
        return (size);
      }
    return(
        <div className="listdiv">
            <p className="listname"></p>
            
            <div type="none" className="list todoList" id="todo"> 
                {todoitemlist().map((e)=>{
                    return <Item key={e.id} description={e.desc} id={e.id} color={"red"} time={e?.time} date={e?.date} taskList={taskList} setTaskList={setTaskList} name={e.name} button1={"disable"} button2={"active"}></Item>
                })}
            </div>
        </div>
        
    )
}

export default ToDolist;