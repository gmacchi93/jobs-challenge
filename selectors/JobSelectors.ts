import { AppState, JobState } from "../types";

export const getLatestJobs = (state:AppState):JobState => state.jobs.latestJobs;
export const getResultsJobs = (state:AppState):JobState => state.jobs.resultsJobs;
