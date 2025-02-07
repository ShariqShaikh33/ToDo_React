import React from "react";
import Item from "../Item";

const Donelist=({taskList, setTaskList})=>{

    const doneitemlist=()=>{
        let size = taskList.filter((e)=>(e.isInProgress==false && e.isCompleted==true))
        return (size);
      }

    return(
        <div className="listdiv">
            <p className="listname">Done</p>
                <div className="list todoList" id="done">

                {doneitemlist()?.map((e)=>{
                    return <Item key={e.id} id={e.id} color={"green"} time={e?.time} date={e.date} taskList={taskList} setTaskList={setTaskList} name={e.name} button1={"disable"} button2={"disable"}></Item>
                })}
            </div>
        </div>
    )
}


export default Donelist;