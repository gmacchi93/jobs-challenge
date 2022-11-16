import { actionTypes, ApplicationGraphQL, FetchApplicationsSuccess, FetchJobsSuccess, ListApplicationItems, ListJobsItems } from "types";

// CREATE_APPLICATION
export const createApplication = (application: ApplicationGraphQL) => ({
  type: actionTypes.CREATE_APPLICATION,
  application,
});

export const createApplicationRequest = () => ({
  type: actionTypes.CREATE_APPLICATION_REQUEST,
});

export const createApplicationSuccess = () => ({
  type: actionTypes.CREATE_APPLICATION_SUCCESS,
});

export const createApplicationError = (error: Error) => ({
  type: actionTypes.CREATE_APPLICATION_ERROR,
  error,
});

// FETCH_APPLICATIONS
export const fetchApplications = () => ({
  type: actionTypes.FETCH_APPLICATIONS,
});

export const fetchApplicationsRequest = () => ({
  type: actionTypes.FETCH_APPLICATIONS_REQUEST,
});

export const fetchApplicationsSuccess = (data: ListApplicationItems): FetchApplicationsSuccess => ({
  type: actionTypes.FETCH_APPLICATIONS_SUCCESS,
  data,
});

export const fetchApplicationsError = (error: Error) => ({
  type: actionTypes.FETCH_APPLICATIONS_ERROR,
  error,
});
