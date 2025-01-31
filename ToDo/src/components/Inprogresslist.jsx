import React from "react";
import App from "./App";
import Item from "./Item";

const Inprogresslist=({taskList})=>{

    const progressitemlist=()=>{
        let size = taskList.filter((e)=>(e.isInProgress==true && e.isCompleted==false))
        return (size);
      }

    return(
        <div className="listdiv">
            <p className="listname">In-Progress</p>
            <div className="list todoList" id="inprogress"> 
                
                {progressitemlist()?.map((e)=>{
                    return <Item key={e.id} name={e.name}></Item>
                })}
            </div>
        </div>
        
    )
}

export default Inprogresslist;