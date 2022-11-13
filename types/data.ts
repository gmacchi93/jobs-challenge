
import { TableJobsFilterInput } from "./API";

export interface Job {
  jobId: string;
  offerStartDate: string;
  name: string;
  offerEndDate: string;
  active: boolean;
  company: string;
  ratePerHour: number;
  tools: Array<string>;
  disciplines: Array<string>;
  jobDesription: string;
  jobType: string;
  location: string;
}

export interface JobState {
  items: Job[],
  nextToken?: string,
}

export interface JobsState {
  latestJobs: JobState;
  resultsJobs: JobState;
}

export interface AppState {
  jobs: JobsState;
}

export interface ListJobsItems {
  listJobs: {
    items: Job[]
    nextToken: string,
  },
}

export interface GetJobsItems {
  getJobs: Job,
}

export interface ListJobsGraphQL {
  data: ListJobsItems;
}

export interface GetJobsGraphQL {
  data: GetJobsItems;
}

export interface FetchJobsVariables {
  limit?: number,
  filter?: TableJobsFilterInput,
  nextToken?: string,
};

export interface GetJobVariables {
  jobId: string,
};