import { actionTypes, FetchJobsSuccess, Job, ListJobsItems } from "types";

// FETCH_JOBS
export const fetchJobs = (filters?: any) => ({
  type: actionTypes.FETCH_JOBS,
  filters,
});

export const fetchJobsRequest = () => ({
  type: actionTypes.FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (data: ListJobsItems): FetchJobsSuccess => ({
  type: actionTypes.FETCH_JOBS_SUCCESS,
  data,
});

export const fetchJobsError = (error: Error) => ({
  type: actionTypes.FETCH_JOBS_ERROR,
  error,
});

// FETCH_LATEST_JOBS
export const fetchLatestJobs = () => ({
  type: actionTypes.FETCH_LATEST_JOBS,
});

export const fetchLatestJobsRequest = () => ({
  type: actionTypes.FETCH_LATEST_JOBS_REQUEST,
});

export const fetchLatestJobsSuccess = (
  data: ListJobsItems
): FetchJobsSuccess => ({
  type: actionTypes.FETCH_LATEST_JOBS_SUCCESS,
  data,
});

export const fetchLatestJobsError = (error: Error) => ({
  type: actionTypes.FETCH_LATEST_JOBS_ERROR,
  error,
});

// CREATE_JOB
export const createJob = (job: Job) => ({
  type: actionTypes.CREATE_JOB,
  job,
});

export const createJobRequest = () => ({
  type: actionTypes.CREATE_JOB_REQUEST,
});

export const createJobSuccess = () => ({
  type: actionTypes.CREATE_JOB_SUCCESS,
});

export const createJobError = (error: Error) => ({
  type: actionTypes.CREATE_JOB_ERROR,
  error,
});
