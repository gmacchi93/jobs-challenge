
import JobsController from "controllers/JobsController";
import { takeLatest, put, call } from "redux-saga/effects";
import {
    fetchJobsRequest, fetchJobsSuccess, fetchJobsError,
    fetchLatestJobsRequest, fetchLatestJobsSuccess, fetchLatestJobsError,
} from "../actions";

import {actionTypes, FetchJobs, Job, ListJobsItems} from "../types"

function* onFetchJobs(action: FetchJobs) {
  try {
    yield put(fetchJobsRequest());
    const data:ListJobsItems = yield call(JobsController.fetchJobs);
    yield put(fetchJobsSuccess(data));
  } catch (error: any) {
    yield put(fetchJobsError(error));
  }
}

function* onFetchLatestJobs(action: FetchJobs) {
  try {
    yield put(fetchLatestJobsRequest());
    const data:ListJobsItems = yield call(JobsController.fetchJobs, { limit: 5, filter: { active: { eq: true } } });
    yield put(fetchLatestJobsSuccess(data));
    } catch (error: any) {
      yield put(fetchLatestJobsError(error));
    }
  }

function* JobSaga() {
  yield takeLatest(actionTypes.FETCH_JOBS, onFetchJobs);
  yield takeLatest(actionTypes.FETCH_LATEST_JOBS, onFetchLatestJobs);
}

export default JobSaga;
