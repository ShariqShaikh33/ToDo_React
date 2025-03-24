import {React} from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useSelector,useDispatch } from "react-redux";
import {addTask} from "../redux files/Slices/addTaskSlice"
import TaskCard from "./TaskCard";
import "../styles/App.css";
import "../styles/form.css";


Modal.setAppElement('#root');

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

const App=()=>{
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.TaskList);
    console.log(state);

    const formSubmit=(event)=>{
        event.preventDefault();
        const taskId = self.crypto.randomUUID();
        const time = new Date();
        const taskTime = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
        const taskName = event.target.taskInput.value;
        let inProgress=false;
        let isDone=false;
        dispatch(addTask({taskId, taskName, taskTime, inProgress, isDone}));
        closeModal();
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

    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal(){
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    return(
        <div className="AppDiv">
            <div className="Header">
                <h1>KANBAN</h1>
            </div>
            <div className="Body">

                

                <div className="taskListDiv">

                    <div className="taskList BlueList" id="todo">
                        <div className="taskListHead BlueListBack blue">
                            <h1>TO DO</h1>
                        </div>
                        <div className="middleBlue"></div>
                        <div className="listItemsDiv BlueListBack">
                            {todoList.map((e)=>{
                                return <TaskCard key={e.taskId} id={e.taskId} taskName={e.taskName}  taskTime={e.taskTime} top={"topBlue"} start={"startbtn"} done={"none"}></TaskCard>
                            })}
                            <div className="addTaskDiv">
                                <button className="addTaskBtn" onClick={openModal}>+</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={modalStyle}
                                    contentLabel="Modal 1"
                                >
                                    <form className="taskForm" id="taskForm" onSubmit={formSubmit}>
                                        <input name="taskInput" id="taskInput" className="taskInput" placeholder="Input Task" required></input>
                                        <button className="addTaskModalBtn">Add</button>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    
                    <div className="taskList OrangeList" id="progress">
                        
                        <div className="taskListHead OrangeListBack orange">
                            <h1>IN PROGRESS</h1>
                        </div>
                        
                        <div className="middleOrange"></div>
                        <div className="listItemsDiv OrangeListBack">
                            {progressList.map((e)=>{
                                return <TaskCard key={e.taskId} id={e.taskId} taskName={e.taskName} taskTime={e.taskTime} top={"topOrange"} start={"none"} done={"donebtn"}></TaskCard>
                            })} 
                        </div>
                    </div>
                    
                    <div className="taskList GreenList" id="done">
                    <div className="taskListHead GreenListBack green">
                            <h1 className="headText">DONE</h1>
                        </div>
                        <div className="middleGreen"></div>
                        <div className="listItemsDiv GreenListBack">
                            {doneList.map((e)=>{
                                return <TaskCard key={e.taskId} id={e.taskId} taskName={e.taskName}  taskTime={e.taskTime} top={"topGreen"} start={"none"} done={"none"}></TaskCard>
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