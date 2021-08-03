import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { USER_ACTION } from '../constants';


// function* loginSaga(action) {
//     try {
//         const result = yield axios.post('http://localhost:3002/todos', action.payload);
//         yield put({
//             type: USER_ACTION.LOGIN_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({ type: USER_ACTION.LOGIN_FAIL, payload: e.message });
//     }
// }
//
// function* logoutSaga({payload}) {
//     try {
//         const result = yield axios.post(`http://localhost:3002/todos/${payload.id}`, payload);
//         yield put({ type: USER_ACTION.LOGOUT_SUCCESS, payload: result.data });
//     } catch (e) {
//         yield put({ type: USER_ACTION.LOGOUT_FAIL, payload: e.message });
//     }
// }
//
// function* registerSaga({payload}) {
//     try {
//         yield axios.post(`http://localhost:3002/todos/${payload.id}`);
//         yield put({ type: USER_ACTION.REGISTER_SUCCESS, payload: {id: payload.id} });
//     } catch (e) {
//         yield put({ type: USER_ACTION.REGISTER_FAIL, payload: e.message });
//     }
// }

export default function* todoSaga() {
    // yield takeEvery(USER_ACTION.LOGIN, loginSaga);
    // yield takeEvery(USER_ACTION.LOGOUT, logoutSaga);
    // yield takeEvery(USER_ACTION.REGISTER, registerSaga);
}
