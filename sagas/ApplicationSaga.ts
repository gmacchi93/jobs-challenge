import ApplicationController from "controllers/ApplicationController";
import { AnyAction } from "redux";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  createApplicationRequest,
  createApplicationSuccess,
  createApplicationError,
  fetchApplicationsRequest,
  fetchApplicationsSuccess,
  fetchApplicationsError,
} from "../actions";
import {
  actionTypes,
  CreateApplication,
  ListApplicationItems,
} from "../types";

function* onCreateApplication({application}: CreateApplication) {
  try {
    yield put(createApplicationRequest());
    yield call(ApplicationController.createApplication, {input: application});
    yield put(createApplicationSuccess());
  } catch (error: any) {
    yield put(createApplicationError(error));
  }
}

function* onFetchApplications(action: AnyAction) {
  try {
    yield put(fetchApplicationsRequest());
    const data: ListApplicationItems = yield call(ApplicationController.fetchApplications, {
      limit: 1000,
    });
    yield put(fetchApplicationsSuccess(data));
  } catch (error: any) {
    yield put(fetchApplicationsError(error));
  }
}

function* JobSaga() {
  yield takeLatest(actionTypes.FETCH_APPLICATIONS, onFetchApplications);
  yield takeLatest(actionTypes.CREATE_APPLICATION, onCreateApplication);
}

export default JobSaga;
