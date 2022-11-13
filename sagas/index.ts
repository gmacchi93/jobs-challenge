import { all, fork } from 'redux-saga/effects';
import JobSaga from './JobSaga';


export default function* rootSaga() {
  yield all([
    fork(JobSaga),
  ]);
}
