import React from "react";
import App from "./App";
import Item from "./Item";

const Inprogresslist=(progress)=>{
    console.log(progress.progress);
    return(
        <div className="listdiv">
            <p className="listname">In-Progress</p>
            <div className="list todoList" id="inprogress"> 
                
                {progress.progress?.map((e)=>{
                    return <Item key={e.id} name={e.name}></Item>
                })}
            </div>
        </div>
        
    )
}

export default Inprogresslist;