import React from "react";

const Item=({id, name, taskList, setTaskList, button1, button2})=>{
    const shiftToProgress=()=>{
        let newList = taskList.map((e)=>{
            if(id==e.id){
                e.isInProgress=true;
                e.isCompleted=false;
            }
            return e});
        console.log(newList);
        setTaskList(newList);
        
    }

    const shiftToDone=()=>{
        let newList = taskList.map((e)=>{
            if(id==e.id){
                e.isCompleted=true;
                e.isInProgress=false;
            }
            return e});
        setTaskList(newList);
        
    }

    return(
        <div className="itemDiv" id={id+"item"}>
            
            <button className={button1} onClick={()=>{shiftToDone()}}>Done</button>
            <p>{name}</p>
            <button className={button2} onClick={()=>{shiftToProgress()}}>{"Start"}</button>
        </div>
    )
}

export default Item;