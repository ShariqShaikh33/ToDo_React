import React from "react";
import App from "./App";
import Item from "./Item";

const Donelist=({taskList})=>{

    const doneitemlist=()=>{
        let size = taskList.filter((e)=>(e.isInProgress==false && e.isCompleted==true))
        return (size);
      }
    return(
        <div className="listdiv">
            <p className="listname">Done</p>
                <div className="list todoList" id="done">

                {doneitemlist().map((e)=>{
                    return <Item key={e.id} name={e.name}></Item>
                })}
            </div>
        </div>
    )
}


export default Donelist;