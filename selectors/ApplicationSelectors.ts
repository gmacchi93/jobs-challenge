import { ApplicationState, AppState } from "../types";

export const getApplications = (state:AppState):ApplicationState => state.applications.applications;
