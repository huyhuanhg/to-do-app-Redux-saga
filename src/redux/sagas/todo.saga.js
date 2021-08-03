import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { TO_DO_ACTION } from '../constants';

function* getTaskListSaga() {
    try {
        const result = yield axios.get('http://localhost:3002/todos?_sort=id&_order=desc');
        yield put({
            type: TO_DO_ACTION.GET_TASK_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({ type: TO_DO_ACTION.GET_TASK_FAIL, payload: e.message });
    }
}

function* createTaskListSaga(action) {
    try {
        const result = yield axios.post('http://localhost:3002/todos', action.payload);
        yield put({
            type: TO_DO_ACTION.CREATE_TASK_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({ type: TO_DO_ACTION.CREATE_TASK_FAIL, payload: e.message });
    }
}

function* editTaskListSaga({payload}) {
    try {
        const result = yield axios.put(`http://localhost:3002/todos/${payload.id}`, payload);
        yield put({ type: TO_DO_ACTION.EDIT_TASK_SUCCESS, payload: result.data });
    } catch (e) {
        yield put({ type: TO_DO_ACTION.EDIT_TASK_FAIL, payload: e.message });
    }
}

function* deleteTaskListSaga({payload}) {
    try {
        yield axios.delete(`http://localhost:3002/todos/${payload.id}`);
        yield put({ type: TO_DO_ACTION.DELETE_TASK_SUCCESS, payload: {id: payload.id} });
    } catch (e) {
        yield put({ type: TO_DO_ACTION.DELETE_TASK_FAIL, payload: e.message });
    }
}

export default function* todoSaga() {
    yield takeEvery(TO_DO_ACTION.GET_TASK, getTaskListSaga);
    yield takeEvery(TO_DO_ACTION.CREATE_TASK, createTaskListSaga);
    yield takeEvery(TO_DO_ACTION.EDIT_TASK, editTaskListSaga);
    yield takeEvery(TO_DO_ACTION.DELETE_TASK, deleteTaskListSaga);
}
