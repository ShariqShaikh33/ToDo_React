import React from "react";
import "../componentCSS/hero.css"

const ToDoHero=({taskList})=>{

    const status_size=(b1,b2)=>{
        let size = taskList.filter((e)=>(e.isInProgress==b1 && e.isCompleted==b2))
        return (size.length);
      }

    return(
        <div className="mainHeroDiv">
            
            <div className="mainCounterDiv">
                <div className="counter redmain">
                    <div className="counterText reddiv">Task Remaining</div>
                    <div className="redtext">{(status_size(false,false))}</div>
                </div>
                
                <div className="listLine"></div>
                <div className="counter yellowmain">
                    <div className="yellowdiv counterText">Task In-Progress</div>
                    <div className="yellowtext">{(status_size(true,false))}</div>
                </div>
                <div className="listLine"></div>
                <div className="counter greenmain">
                    <div className="greendiv counterText">Task Completed</div>
                    <div className="greentext">{(status_size(false,true))}</div>
                </div>
            </div>
        </div>
    )
}

export default ToDoHero;