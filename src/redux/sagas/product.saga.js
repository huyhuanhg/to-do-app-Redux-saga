import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { PRODUCT_ACTION } from '../constants';

function* getProductListSaga() {
  try {
    const result = yield axios.get('http://localhost:3002/products?_sort=id&_order=desc');
    yield put({
      type: PRODUCT_ACTION.GET_PRODUCT_LIST_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({ type: PRODUCT_ACTION.GET_PRODUCT_LIST_FAIL, payload: e.message });
  }
}

function* createProductSaga(action) {
  try {
    const result = yield axios.post('http://localhost:3002/products', action.payload);
    yield put({
      type: PRODUCT_ACTION.CREATE_PRODUCT_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({ type: PRODUCT_ACTION.CREATE_PRODUCT_FAIL, payload: e.message });
  }
}

function* editProductSaga({payload}) {
  try {
    const result = yield axios.put(`http://localhost:3002/products/${payload.id}`, payload);
    yield put({ type: PRODUCT_ACTION.EDIT_PRODUCT_SUCCESS, payload: result.data });
  } catch (e) {
    yield put({ type: PRODUCT_ACTION.CREATE_PRODUCT_FAIL, payload: e.message });
  }
}

function* deleteProductSaga({payload}) {
  try {
    yield axios.delete(`http://localhost:3002/products/${payload.id}`);
    yield put({ type: PRODUCT_ACTION.DELETE_PRODUCT_SUCCESS, payload: {id: payload.id} });
  } catch (e) {
    yield put({ type: PRODUCT_ACTION.DELETE_PRODUCT_FAIL, payload: e.message });
  }
}

export default function* productSaga() {
  yield takeEvery(PRODUCT_ACTION.GET_PRODUCT_LIST, getProductListSaga);
  yield takeEvery(PRODUCT_ACTION.CREATE_PRODUCT, createProductSaga);
  yield takeEvery(PRODUCT_ACTION.EDIT_PRODUCT, editProductSaga);
  yield takeEvery(PRODUCT_ACTION.DELETE_PRODUCT, deleteProductSaga);
}
