import React, { useState } from "react";
import ToDoHero from "./ToDoHero";
import AddTask from "./AddTask";
import ToDolist from "./ListComponents/ToDolist";
import Inprogresslist from "./ListComponents/Inprogresslist";
import Donelist from "./ListComponents/Donelist";
import "../componentCSS/Home.css";


const Home=()=>{
  const [taskList,setTaskList] = useState([
      {name:"Task 1", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false}, 
      {name:"Task 2", date: "2002-02-04", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false}, 
      {name:"Task 3", date: "2003-02-04", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false},
      {name:"Task 4", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false}, 
      {name:"Task 5", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false}, 
      {name:"Task 6", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false},
      {name:"Task 7", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true},
      {name:"Task 8", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true}, 
      {name:"Task 9", date: "2001-02-04", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true}
  
    ]);

    
  return (
    <div className="mainHomeDiv">

      <ToDoHero taskList={taskList}/>
      <AddTask setTaskList={setTaskList}/>
      <div className="taskLists">
        <ToDolist taskList={taskList} setTaskList={setTaskList}/>
        <Inprogresslist taskList={taskList} setTaskList={setTaskList}/>
        <Donelist taskList={taskList} setTaskList={setTaskList}/>
      </div>

    </div>
  )
}

export default Home;