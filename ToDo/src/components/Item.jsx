import React from "react";

const Item=(list)=>{
    console.log(list.name);
    return(
        <div className="itemDiv">
            <p>{list.name}</p>
        </div>
    )
}

export default Item;