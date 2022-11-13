import { Job, ListJobsItems } from "types"

export enum actionTypes {
    FETCH_JOBS = 'FETCH_JOBS',
    FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST',
    FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS',
    FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR',

    FETCH_LATEST_JOBS = 'FETCH_LATEST_JOBS',
    FETCH_LATEST_JOBS_REQUEST = 'FETCH_LATEST_JOBS_REQUEST',
    FETCH_LATEST_JOBS_SUCCESS = 'FETCH_LATEST_JOBS_SUCCESS',
    FETCH_LATEST_JOBS_ERROR = 'FETCH_LATEST_JOBS_ERROR',
}

export interface FetchJobs {
    type: actionTypes.FETCH_JOBS | actionTypes.FETCH_LATEST_JOBS
}

export interface FetchJobsRequest {
    type: actionTypes.FETCH_JOBS_REQUEST,
}

export interface FetchJobsSuccess {
    type: actionTypes.FETCH_JOBS_SUCCESS | actionTypes.FETCH_LATEST_JOBS_SUCCESS,
    data: ListJobsItems,
}

export interface FetchJobsError {
    type: actionTypes.FETCH_JOBS_ERROR,
    error: Error
}