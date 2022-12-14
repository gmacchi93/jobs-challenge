import { Job, ListJobsItems, ListApplicationItems, ApplicationGraphQL } from "types";

export enum actionTypes {
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST",
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR",

  FETCH_LATEST_JOBS = "FETCH_LATEST_JOBS",
  FETCH_LATEST_JOBS_REQUEST = "FETCH_LATEST_JOBS_REQUEST",
  FETCH_LATEST_JOBS_SUCCESS = "FETCH_LATEST_JOBS_SUCCESS",
  FETCH_LATEST_JOBS_ERROR = "FETCH_LATEST_JOBS_ERROR",

  FETCH_APPLICATIONS = "FETCH_APPLICATIONS",
  FETCH_APPLICATIONS_REQUEST = "FETCH_APPLICATIONS_REQUEST",
  FETCH_APPLICATIONS_SUCCESS = "FETCH_APPLICATIONS_SUCCESS",
  FETCH_APPLICATIONS_ERROR = "FETCH_APPLICATIONS_ERROR",

  CREATE_APPLICATION = "CREATE_APPLICATION",
  CREATE_APPLICATION_REQUEST = "CREATE_APPLICATION_REQUEST",
  CREATE_APPLICATION_SUCCESS = "CREATE_APPLICATION_SUCCESS",
  CREATE_APPLICATION_ERROR = "CREATE_APPLICATION_ERROR",

  CREATE_JOB = "CREATE_JOB",
  CREATE_JOB_REQUEST = "CREATE_JOB_REQUEST",
  CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS",
  CREATE_JOB_ERROR = "CREATE_JOB_ERROR",
}

export interface CreateJobAction {
  type: actionTypes.CREATE_JOB;
  job: Job;
}

export interface CreateApplication {
  type: actionTypes.CREATE_APPLICATION;
  application: ApplicationGraphQL;
}

export interface FetchJobs {
  type: actionTypes.FETCH_JOBS | actionTypes.FETCH_LATEST_JOBS;
  filters?: any;
}

export interface FetchJobsRequest {
  type: actionTypes.FETCH_JOBS_REQUEST;
}

export interface FetchJobsSuccess {
  type: actionTypes.FETCH_JOBS_SUCCESS | actionTypes.FETCH_LATEST_JOBS_SUCCESS;
  data: ListJobsItems;
}

export interface FetchApplicationsSuccess {
  type: actionTypes.FETCH_APPLICATIONS_SUCCESS;
  data: ListApplicationItems;
}

export interface FetchJobsError {
  type: actionTypes.FETCH_JOBS_ERROR;
  error: Error;
}
