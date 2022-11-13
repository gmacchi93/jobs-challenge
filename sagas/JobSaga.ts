import JobsController from "controllers/JobsController";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsError,
  fetchLatestJobsRequest,
  fetchLatestJobsSuccess,
  fetchLatestJobsError,
} from "../actions";

import {
  actionTypes,
  FetchJobs,
  FetchJobsVariables,
  Job,
  ListJobsItems,
} from "../types";

function* onFetchJobs(action: FetchJobs) {
  const { filters } = action;
  const variables = {
    filter: {
      active: { eq: true },
      ...(filters.name && { name: { contains: filters.name } }),
      ...(filters.minimunRate && {
        ratePerHour: { ge: filters.minimunRate },
      }),
      ...(filters.company && { company: { contains: filters.company } }),
      ...(filters.location && { location: { contains: filters.location } }),
      ...(filters.tools && { tools: { contains: filters.tools } }),
    },
  };
  try {
    yield put(fetchJobsRequest());
    const data: ListJobsItems = yield call(JobsController.fetchJobs, variables);
    yield put(fetchJobsSuccess(data));
  } catch (error: any) {
    yield put(fetchJobsError(error));
  }
}

function* onFetchLatestJobs(action: FetchJobs) {
  try {
    yield put(fetchLatestJobsRequest());
    const data: ListJobsItems = yield call(JobsController.fetchJobs, {
      limit: 5,
      filter: { active: { eq: true } },
    });
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
