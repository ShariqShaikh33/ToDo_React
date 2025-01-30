import React, { useState } from "react";
import ToDoHero from "./ToDoHero";
import AddTask from "./AddTask";
import ToDolist from "./ToDolist";
import Inprogresslist from "./Inprogresslist";
import Donelist from "./Donelist";
import "../componentCSS/Home.css";


const Home=()=>{
  const [todo,setTodo] = useState([
      {name:"Task 1", id: self.crypto.randomUUID(), isCompleted: false, isInProgress: false}, 
      {name:"Task 2", id: self.crypto.randomUUID(), isCompleted: false, isInProgress: false}, 
      {name:"Task 3", id: self.crypto.randomUUID(), isCompleted: false, isInProgress: false}
  ]);
  const [inProgress,setProgress] = useState([
      {name:"Task 4", id: self.crypto.randomUUID(), isCompleted: false, isInProgress: true}, 
      {name:"Task 5", id: self.crypto.randomUUID(), isCompleted: false, isInProgress: true}, 
      {name:"Task 6", id: self.crypto.randomUUID(), isCompleted: false, isInProgress: true}
  ]);
  const [done,setDone] = useState([
      {name:"Task 7", id: self.crypto.randomUUID(), isCompleted: true, isInProgress: false}, 
      {name:"Task 8", id: self.crypto.randomUUID(), isCompleted: true, isInProgress: false}, 
      {name:"Task 9", id: self.crypto.randomUUID(), isCompleted: true, isInProgress: false}
  ]);


  return (
    <>
      <ToDoHero todo_size={todo.length} progress_size={todo.length} done_size={done.length}/>
      <AddTask/>
      <div className="taskLists">
        <ToDolist todo={todo}/>
        <Inprogresslist progress={inProgress}/>
        <Donelist done={done}/>
      </div>

    </>
  )
}

export default Home;