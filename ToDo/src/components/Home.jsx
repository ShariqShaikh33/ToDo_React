import React, { useState } from "react";
import ToDoHero from "./ToDoHero";
import AddTask from "./AddTask";
import ToDolist from "./ToDolist";
import Inprogresslist from "./Inprogresslist";
import Donelist from "./Donelist";
import "../componentCSS/Home.css";


const Home=()=>{
  const [taskList,setTaskList] = useState([
      {name:"Task 1", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false}, 
      {name:"Task 2", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false}, 
      {name:"Task 3", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: false},
      {name:"Task 4", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false}, 
      {name:"Task 5", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false}, 
      {name:"Task 6", id: self.crypto.randomUUID(), isInProgress: true , isCompleted: false},
      {name:"Task 7", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true },
      {name:"Task 8", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true }, 
      {name:"Task 9", id: self.crypto.randomUUID(), isInProgress: false, isCompleted: true }
  
    ]);

    
  return (
    <>

      <ToDoHero taskList={taskList}/>
      <AddTask setTaskList={setTaskList}/>
      <div className="taskLists">
        <ToDolist taskList={taskList} setTaskList={setTaskList}/>
        <Inprogresslist taskList={taskList} setTaskList={setTaskList}/>
        <Donelist taskList={taskList}/>
      </div>

    </>
  )
}

export default Home;