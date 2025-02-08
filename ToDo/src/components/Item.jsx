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
            let dayarr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            let day = dayarr[currentdate.getDay()];
            let todayDate = currentdate.getDate();
            let montharr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let month = montharr[currentdate.getMonth()];
            console.log(month);
            let year = currentdate.getFullYear();
            let formattedDate = `${day}, ${todayDate} ${month} ${year}`;
            console.log(formattedDate);
            date = formattedDate;
        }
    }


    return(
        <div className={color+"main mainitemDiv"} id={id+"item"}> {/*vertical */}
            <div className={color}></div>

            <div className="itemDivDown"> {/*vertical */}
                <div className="taskUpper">{/*horizontal */}
                    <div className="taskTitle"> {/*vertical*/}
                        <div className="taskName">{name}</div>
                        <div className="taskTimeandDate"> {/*horizontal */}
                        {formatDate()}
                            <div className="taskDate">{date}</div>
                            <div className="taskTime">{time}</div>
                            
                        </div>
                    </div>

                    <div className="taskFunctionBtn">
                        <button className={button1} onClick={()=>{shiftToDone()}}>Done</button>                
                        <button className={button2} onClick={()=>{shiftToProgress()}}>{"Start"}</button>
                    </div>
                </div>
                <div className="line"></div>
                <div className="taskLower">
                    <button className="delete" onClick={()=>{deleteTask()}}>Delete</button>
                </div>
                

                
                
                
            </div>
            </div>
    )
}

export default Item;