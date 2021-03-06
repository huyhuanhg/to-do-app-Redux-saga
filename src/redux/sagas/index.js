import { fork } from 'redux-saga/effects';

import productSaga from './product.saga';
import todoSaga from './todo.saga';
import userSaga from './user.saga';

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(todoSaga);
  yield fork(userSaga);
}