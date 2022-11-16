import {
  actionTypes,
  ApplicationsState,
  FetchApplicationsSuccess,
} from "../types";

const initialState = {
  applications: { items: [], nextToken: "" },
};

const onFetchApplicationsSuccess = (
  state: ApplicationsState,
  action: FetchApplicationsSuccess
) => {
  const {
    data: { listMyCustomTypes },
  } = action;

  const items = listMyCustomTypes.items.map((item) => ({
    ...item,
    job: JSON.parse(item.job),
  }));

  return {
    ...state,
    applications: {
      ...listMyCustomTypes,
      items,
    },
  };
};

const reducer = (
  state = initialState,
  action: FetchApplicationsSuccess
): ApplicationsState => {
  switch (action.type) {
    case actionTypes.FETCH_APPLICATIONS_SUCCESS:
      return onFetchApplicationsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
