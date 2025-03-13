import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {inProgress: false, isDone: false, taskDesc: "This is a description", taskId: "1", taskName: "Task 1"},
    {inProgress: false, isDone: false, taskDesc: "This is second a description", taskId: "12", taskName: "Task 2"},
    {inProgress: true, isDone: false, taskDesc: "This is a description", taskId: "123", taskName: "Task 3"},
    {inProgress: true, isDone: false, taskDesc: "This is second a description", taskId: "1234", taskName: "Task 4"},
    {inProgress: false, isDone: true, taskDesc: "This is a description", taskId: "12345", taskName: "Task 5"},
    {inProgress: false, isDone: true, taskDesc: "This is second a description", taskId: "123456", taskName: "Task 6"}
];

const addTaskSlice = createSlice({
    name: "TaskLists",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            return [...state,  action.payload];
        },
        startTask: (state, action)=>{
            state.map((e)=>{
                if(e.taskId==action.payload){
                    e.inProgress=true;
                }
                return e;
            });
        },
        completeTask: (state, action)=>{
            state.map((e)=>{
                if(e.taskId==action.payload){
                    e.inProgress=false;
                    e.isDone=true;
                }
                return e;
            });
        },
        deleteTask: (state, action)=>{
            return state.filter((e)=>e.taskId != action.payload);
        }
    }
});

export const {addTask, startTask, completeTask, deleteTask} = addTaskSlice.actions;

export default addTaskSlice.reducer;