import { takeEvery, takeLatest, takeLeading, select } from 'redux-saga/effects';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../constatns';

const delay = (time) => new Promise((resolve, reject) => {
  setTimeout(resolve, time * 1000)
})

export function* workerSaga() {
  const count = yield select(({ counter }) => counter.count);
  yield delay(2);
  console.log(`request ${count}`);
}

export function* watchClickSaga() {
  yield takeLatest(INCREMENT_COUNT, workerSaga)
  yield takeLeading(INCREMENT_COUNT, workerSaga)
}

export default function* rootSaga() {
  yield watchClickSaga();
}