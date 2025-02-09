import React, { useState } from "react";
import ToDoHero from "./ToDoHero";
import AddTask from "./AddTask";
import ToDolist from "./ListComponents/ToDolist";
import Inprogresslist from "./ListComponents/Inprogresslist";
import Donelist from "./ListComponents/Donelist";
import "../componentCSS/Home.css";


const Home=()=>{
  const [taskList,setTaskList] = useState([
      {name:"Task 1", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false}, 
      // {name:"Task 2", desc: "This is a description", date: "2002-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false}, 
      // {name:"Task 3", desc: "This is a description", date: "2003-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false},
      {name:"Task 4", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false}, 
      // {name:"Task 5", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false}, 
      // {name:"Task 6", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false},
      {name:"Task 7", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true},
      // {name:"Task 8", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true}, 
      // {name:"Task 9", desc: "This is a description", date: "2001-02-04", time: "20:00", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true}
  
    ]);

    
  return (
    <div className="mainHomeDiv">

      
      <AddTask setTaskList={setTaskList}/>
      <ToDoHero taskList={taskList}/>
      <div className="taskLists">
        <ToDolist taskList={taskList} setTaskList={setTaskList}/>
        <div className="listLine"></div>
        <Inprogresslist taskList={taskList} setTaskList={setTaskList}/>
        <div className="listLine"></div>
        <Donelist taskList={taskList} setTaskList={setTaskList}/>
      </div>

    </div>
  )
}

export default Home;