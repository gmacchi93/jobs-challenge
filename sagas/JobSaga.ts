import JobsController from "controllers/JobsController";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsError,
  fetchLatestJobsRequest,
  fetchLatestJobsSuccess,
  fetchLatestJobsError,
  createJobRequest,
  createJobSuccess,
  createJobError,
} from "../actions";
import {
  actionTypes,
  CreateJobAction,
  FetchJobs,
  ListJobsItems,
} from "../types";

function* onFetchJobs(action: FetchJobs) {
  const { filters } = action;
  const variables = {
    limit: 1000,
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

function* onCreateJob({job}: CreateJobAction) {
  try {
    yield put(createJobRequest());
    const data: ListJobsItems = yield call(JobsController.createJob, {input: job});
    yield put(createJobSuccess());
  } catch (error: any) {
    yield put(createJobError(error));
  }
}

function* JobSaga() {
  yield takeLatest(actionTypes.FETCH_JOBS, onFetchJobs);
  yield takeLatest(actionTypes.FETCH_LATEST_JOBS, onFetchLatestJobs);
  yield takeLatest(actionTypes.CREATE_JOB, onCreateJob);
}

export default JobSaga;
