import { actionTypes, FetchJobsSuccess, JobsState } from "../types";

const initialState = {
  latestJobs: {items: [], nextToken: ''},
  resultsJobs: {items: [], nextToken: ''},
};

const onFetchJobsSuccess = (
  state: JobsState,
  action: FetchJobsSuccess,
  target: "latestJobs" | "resultsJobs"
) => {
  const {
    data: {
      listJobs,
    },
  } = action;
  return {
    ...state,
    [target]: { ...listJobs },
  };
};

const reducer = (state = initialState, action: FetchJobsSuccess): JobsState => {
  switch (action.type) {
    case actionTypes.FETCH_JOBS_SUCCESS:
      return onFetchJobsSuccess(state, action, "resultsJobs");
    case actionTypes.FETCH_LATEST_JOBS_SUCCESS:
      return onFetchJobsSuccess(state, action, "latestJobs");
    default:
      return state;
  }
};

export default reducer;
