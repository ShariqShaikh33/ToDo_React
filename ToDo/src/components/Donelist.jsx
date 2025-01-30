import React from "react";
import App from "./App";
import Item from "./Item";

const Donelist=(done)=>{
    console.log(done.done);
    return(
        <div className="listdiv">
            <p className="listname">Done</p>
                <div className="list todoList" id="done">

                {done.done?.map((e)=>{
                    return <Item key={e.id} name={e.name}></Item>
                })}
            </div>
        </div>
    )
}


export default Donelist;