import { TO_DO_ACTION } from '../constants';

import {createAction} from "@reduxjs/toolkit";

export const getTaskAction = createAction(TO_DO_ACTION.GET_TASK);
export const createTaskAction = createAction(TO_DO_ACTION.CREATE_TASK);
export const editTaskAction = createAction(TO_DO_ACTION.EDIT_TASK);
export const deleteTaskAction = createAction(TO_DO_ACTION.DELETE_TASK);
