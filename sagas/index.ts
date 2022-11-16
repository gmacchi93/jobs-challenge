import { all, fork } from 'redux-saga/effects';
import JobSaga from './JobSaga';
import ApplicationSaga from './ApplicationSaga';


export default function* rootSaga() {
  yield all([
    fork(JobSaga),
    fork(ApplicationSaga),
  ]);
}
