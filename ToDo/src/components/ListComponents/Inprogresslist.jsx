import React from "react";
import Item from "../Item";

const Inprogresslist=({taskList, setTaskList})=>{

    const progressitemlist=()=>{
        let size = taskList.filter((e)=>(e.isInProgress==true && e.isCompleted==false))
        return (size);
      }

    return(
        <div className="listdiv">
            <div className="list todoList" id="inprogress"> 
                
                {progressitemlist()?.map((e)=>{
                    return <Item key={e.id} id={e.id} description={e.desc} time={e.time} date={e.date} color={"yellow"} taskList={taskList} setTaskList={setTaskList} name={e.name} button1={"active"} button2={"disable"}></Item>

                })}
            </div>
        </div>
        
    )
}

export default Inprogresslist;