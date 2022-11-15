import { actionTypes } from "./actions";
import { TableJobsFilterInput } from "./API";
import { statusTypes } from "./status";

export enum JobTypes {
  ONSITE = "On-Site",
  REMOTE = "Remote",
  HYBRID = "Hybrid",
}

export enum Disciplines {
  ANIMATION = "Animation",
  ART = "Art",
  AUDIO = "Audio",
  ECONOMY = "Economy",
  ENGINEERING = "Engineering",
  GAME_DESIGN = "Game Design",
  UXUI_DESIGN = "UXUI Design",
}

export type JobField = 'jobId' | 'offerStartDate' | 'name' | 'offerEndDate' | 'active' | 'company' | 'ratePerHour' | 'tools' | 'disciplines' | 'jobDesription' | 'jobType' | 'location';

export interface Job {
  jobId: string;
  offerStartDate: string;
  name: string;
  offerEndDate: string;
  active: boolean;
  company: string;
  ratePerHour: number;
  tools: Array<string>;
  disciplines: Array<Disciplines>;
  jobDesription: string;
  jobType: JobTypes;
  location: string;
}

export interface JobState {
  items: Job[];
  nextToken?: string;
}

export interface JobsState {
  latestJobs: JobState;
  resultsJobs: JobState;
}

export interface StatusState {
  [key: string]: statusTypes;
}

export interface AppState {
  jobs: JobsState;
  status: StatusState;
}

export interface ListJobsItems {
  listJobs: {
    items: Job[];
    nextToken: string;
  };
}

export interface GetJobsItems {
  getJobs: Job;
}

export interface ListJobsGraphQL {
  data: ListJobsItems;
}

export interface GetJobsGraphQL {
  data: GetJobsItems;
}

export interface FetchJobsVariables {
  limit?: number;
  filter?: TableJobsFilterInput;
  nextToken?: string;
}

export interface GetJobVariables {
  jobId: string;
}
