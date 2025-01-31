import React from "react";
import "../componentCSS/hero.css"

const ToDoHero=({taskList})=>{

    const status_size=(b1,b2)=>{
        let size = taskList.filter((e)=>(e.isInProgress==b1 && e.isCompleted==b2))
        return (size.length);
      }

    return(
        <div>
            <p>ToDo App</p>
            <div className="mainCounterDiv">
                <div className="counter">
                    <p className="counterValue">{(status_size(false,false))}</p>
                    <p className="counterText">Task Remaining</p>
                </div>
                <div className="counter">
                    <p className="counterValue">{(status_size(true,false))}</p>
                    <p className="counterText">Task In-Progress</p>
                </div>
                <div className="counter">
                    <p className="counterValue">{(status_size(false,true))}</p>
                    <p className="counterText">Task Completed</p>
                </div>
            </div>
        </div>
    )
}

export default ToDoHero;