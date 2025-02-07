import React from "react";
import "../componentCSS/Item.css"

const Item=({id, name, color,time, date, taskList, setTaskList, button1, button2})=>{
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

    const deleteTask=()=>{
        let newList = taskList.filter((e)=>{
            return e.id!=id;
        })
        setTaskList(newList);
    }


    const formatDate=()=>{
        if(date!=""){
            const currentdate = new Date(date);
            const dateFormatter = new Intl.DateTimeFormat("en-US",{dateStyle: 'long'});
            const formattedDate = dateFormatter.format(currentdate);
            date = formattedDate;
        }
    }


    return(
        <div className="mainitemDiv" id={id+"item"}>
            <div className={color}></div>
            <div className="itemDivleft">
                <button className={button1} onClick={()=>{shiftToDone()}}>Done</button>
                <div className="taskName">
                    <p>{name}</p>
                </div>
                <button className="delete" onClick={()=>{deleteTask()}}>Delete</button>
                {formatDate()}
                <div className="taskDate">{date}</div>
                <div className="taskTime">{time}</div>
                
                <button className={button2} onClick={()=>{shiftToProgress()}}>{"Start"}</button>
            </div>
            </div>
    )
}

export default Item;