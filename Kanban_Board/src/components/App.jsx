import {React} from "react";
import { useSelector,useDispatch } from "react-redux";
import {addTask} from "../redux files/Slices/addTaskSlice"
import TaskCard from "./TaskCard";
import "../styles/App.css";

const App=()=>{
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.TaskList);
    console.log(state);

    const formSubmit=(event)=>{
        event.preventDefault();
        const taskId = self.crypto.randomUUID();
        const taskName = event.target.taskInput.value;
        const taskDesc = event.target.taskDescription.value;
        let inProgress=false;
        let isDone=false;
        dispatch(addTask({taskId, taskName, taskDesc, inProgress, isDone}));
    }
    
    let todoList = state.filter((i)=>{
        return i.inProgress==false && i.isDone==false;
    })
    let progressList = state.filter((i)=>{
        return i.inProgress==true && i.isDone==false;
    })
    let doneList = state.filter((i)=>{
        return i.inProgress==false && i.isDone==true;
    })

    return(
        <div className="AppDiv">
            <div className="Header">
                <h1>KANBAN</h1>
            </div>
            <div className="Body">

                <form id="taskForm" onSubmit={formSubmit}>
                    <input name="taskInput" id="taskInput" className="taskInput" placeholder="Input Task"></input>
                    <input name="taskDescription" id="taskDescription" className="taskDescription" placeholder="Description"></input>
                    <button id="addTaskBtn" className="addTaskBtn">Add</button>
                </form>


                <h3>Task List</h3>
                <div className="taskListDiv">

                    <div className="taskList " id="todo">
                        <div className="taskListHead blue">
                            <h1>TO DO</h1>
                        </div>
                        <div className="middle"></div>
                        <div className="listItemsDiv">
                            {todoList.map((e)=>{
                                return <TaskCard key={e.taskId} id={e.taskId} taskName={e.taskName}  taskDesc={e.taskDesc} start={"startbtn"} done={"none"}></TaskCard>
                            })}
                        </div>
                    </div>
                    
                    <div className="taskList " id="progress">
                        <div className="taskListHead orange">
                            <h1>IN PROGRESS</h1>
                        </div>
                        <div className="middle"></div>
                        <div className="listItemsDiv middleList">
                            {progressList.map((e)=>{
                                return <TaskCard key={e.taskId} id={e.taskId} taskName={e.taskName} taskDesc={e.taskDesc} start={"none"} done={"donebtn"}></TaskCard>
                            })} 
                        </div>
                    </div>
                    
                    <div className="taskList" id="done">
                    <div className="taskListHead green">
                            <h1 className="headText">DONE</h1>
                        </div>
                        <div className="middle"></div>
                        <div className="listItemsDiv">
                            {doneList.map((e)=>{
                                return <TaskCard key={e.taskId} id={e.taskId} taskName={e.taskName}  taskDesc={e.taskDesc} start={"none"} done={"none"}></TaskCard>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="Footer">

            </div>
        </div>
    )
}

export default App;