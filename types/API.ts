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

export type CreateMyCustomTypeInput = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  linkedInUrl: string,
  job: string,
};

export type MyCustomType = {
  __typename: "MyCustomType",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  linkedInUrl: string,
  job: string,
};

export type UpdateMyCustomTypeInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  linkedInUrl?: string | null,
  job?: string | null,
};

export type DeleteMyCustomTypeInput = {
  id: string,
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

export type TableMyCustomTypeFilterInput = {
  id?: TableIDFilterInput | null,
  firstName?: TableStringFilterInput | null,
  lastName?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  linkedInUrl?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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

export type MyCustomTypeConnection = {
  __typename: "MyCustomTypeConnection",
  items?:  Array<MyCustomType | null > | null,
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

export type CreateMyCustomTypeMutationVariables = {
  input: CreateMyCustomTypeInput,
};

export type CreateMyCustomTypeMutation = {
  createMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
  } | null,
};

export type UpdateMyCustomTypeMutationVariables = {
  input: UpdateMyCustomTypeInput,
};

export type UpdateMyCustomTypeMutation = {
  updateMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
  } | null,
};

export type DeleteMyCustomTypeMutationVariables = {
  input: DeleteMyCustomTypeInput,
};

export type DeleteMyCustomTypeMutation = {
  deleteMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
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

export type GetMyCustomTypeQueryVariables = {
  id: string,
};

export type GetMyCustomTypeQuery = {
  getMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
  } | null,
};

export type ListMyCustomTypesQueryVariables = {
  filter?: TableMyCustomTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyCustomTypesQuery = {
  listMyCustomTypes?:  {
    __typename: "MyCustomTypeConnection",
    items?:  Array< {
      __typename: "MyCustomType",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      linkedInUrl: string,
      job: string,
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

export type OnCreateMyCustomTypeSubscriptionVariables = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  linkedInUrl?: string | null,
};

export type OnCreateMyCustomTypeSubscription = {
  onCreateMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
  } | null,
};

export type OnUpdateMyCustomTypeSubscriptionVariables = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  linkedInUrl?: string | null,
};

export type OnUpdateMyCustomTypeSubscription = {
  onUpdateMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
  } | null,
};

export type OnDeleteMyCustomTypeSubscriptionVariables = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  linkedInUrl?: string | null,
};

export type OnDeleteMyCustomTypeSubscription = {
  onDeleteMyCustomType?:  {
    __typename: "MyCustomType",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    linkedInUrl: string,
    job: string,
  } | null,
};
