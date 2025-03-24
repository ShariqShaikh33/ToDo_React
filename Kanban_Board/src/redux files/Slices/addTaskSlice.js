import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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