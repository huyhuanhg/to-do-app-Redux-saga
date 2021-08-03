import {TO_DO_ACTION} from '../constants';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {taskList: []};

const todoReducer = createReducer(initialState, {
  [TO_DO_ACTION.GET_TASK_SUCCESS]: (state, {payload})=>{
    return {
      ...state,
      taskList: [...payload],
    }
  },
  [TO_DO_ACTION.CREATE_TASK_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      taskList: [
          ...state.taskList,
          payload
      ]
    }
  },
  [TO_DO_ACTION.EDIT_TASK_SUCCESS]: (state, {payload}) => {
    let tasks = [...state.taskList];
    let taskIndex = tasks.findIndex(task => task.id === payload.id);
    tasks.splice(taskIndex, 1, payload);
    return {
      ...state,
      taskList: tasks
    };
  },
  [TO_DO_ACTION.DELETE_TASK_SUCCESS]: (state, {payload}) => {
    let tasks = [...state.taskList];
    let taskIndex = tasks.findIndex(task => task.id === payload.id);
    tasks.splice(taskIndex, 1);
    return {
      ...state,
      taskList: tasks
    };
  },
});

export default todoReducer;
