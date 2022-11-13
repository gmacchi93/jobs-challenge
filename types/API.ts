/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobsInput = {
  jobId: string,
  offerStartDate: string,
  offerEndDate: string,
  name: string,
  active: boolean,
  company: string,
  ratePerHour: number,
  tools: Array< string | null >,
  disciplines: Array< string | null >,
  jobDesription: string,
  jobType: string,
  location: string,
};

export type Jobs = {
  __typename: "Jobs",
  jobId: string,
  offerStartDate: string,
  offerEndDate: string,
  name: string,
  active: boolean,
  company: string,
  ratePerHour: number,
  tools: Array< string | null >,
  disciplines: Array< string | null >,
  jobDesription: string,
  jobType: string,
  location: string,
};

export type UpdateJobsInput = {
  jobId: string,
  offerStartDate?: string | null,
  offerEndDate?: string | null,
  name?: string | null,
  active?: boolean | null,
  company?: string | null,
  ratePerHour?: number | null,
  tools?: Array< string | null > | null,
  disciplines?: Array< string | null > | null,
  jobDesription?: string | null,
  jobType?: string | null,
  location?: string | null,
};

export type DeleteJobsInput = {
  jobId: string,
};

export type TableJobsFilterInput = {
  jobId?: TableStringFilterInput | null,
  offerStartDate?: TableStringFilterInput | null,
  offerEndDate?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  active?: TableBooleanFilterInput | null,
  company?: TableStringFilterInput | null,
  ratePerHour?: TableFloatFilterInput | null,
  tools?: TableStringFilterInput | null,
  disciplines?: TableStringFilterInput | null,
  jobDesription?: TableStringFilterInput | null,
  jobType?: TableStringFilterInput | null,
  location?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type JobsConnection = {
  __typename: "JobsConnection",
  items?:  Array<Jobs | null > | null,
  nextToken?: string | null,
};

export type CreateJobsMutationVariables = {
  input: CreateJobsInput,
};

export type CreateJobsMutation = {
  createJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};

export type UpdateJobsMutationVariables = {
  input: UpdateJobsInput,
};

export type UpdateJobsMutation = {
  updateJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};

export type DeleteJobsMutationVariables = {
  input: DeleteJobsInput,
};

export type DeleteJobsMutation = {
  deleteJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};

export type GetJobsQueryVariables = {
  jobId: string,
};

export type GetJobsQuery = {
  getJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: TableJobsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "JobsConnection",
    items?:  Array< {
      __typename: "Jobs",
      jobId: string,
      offerStartDate: string,
      offerEndDate: string,
      name: string,
      active: boolean,
      company: string,
      ratePerHour: number,
      tools: Array< string | null >,
      disciplines: Array< string | null >,
      jobDesription: string,
      jobType: string,
      location: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJobsSubscriptionVariables = {
  jobId?: string | null,
  offerStartDate?: string | null,
  offerEndDate?: string | null,
  name?: string | null,
  active?: boolean | null,
};

export type OnCreateJobsSubscription = {
  onCreateJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};

export type OnUpdateJobsSubscriptionVariables = {
  jobId?: string | null,
  offerStartDate?: string | null,
  offerEndDate?: string | null,
  name?: string | null,
  active?: boolean | null,
};

export type OnUpdateJobsSubscription = {
  onUpdateJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};

export type OnDeleteJobsSubscriptionVariables = {
  jobId?: string | null,
  offerStartDate?: string | null,
  offerEndDate?: string | null,
  name?: string | null,
  active?: boolean | null,
};

export type OnDeleteJobsSubscription = {
  onDeleteJobs?:  {
    __typename: "Jobs",
    jobId: string,
    offerStartDate: string,
    offerEndDate: string,
    name: string,
    active: boolean,
    company: string,
    ratePerHour: number,
    tools: Array< string | null >,
    disciplines: Array< string | null >,
    jobDesription: string,
    jobType: string,
    location: string,
  } | null,
};
