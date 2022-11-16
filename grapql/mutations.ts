/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobs = /* GraphQL */ `
  mutation CreateJobs($input: CreateJobsInput!) {
    createJobs(input: $input) {
      jobId
      offerStartDate
      offerEndDate
      name
      active
      company
      ratePerHour
      tools
      disciplines
      jobDesription
      jobType
      location
    }
  }
`;
export const updateJobs = /* GraphQL */ `
  mutation UpdateJobs($input: UpdateJobsInput!) {
    updateJobs(input: $input) {
      jobId
      offerStartDate
      offerEndDate
      name
      active
      company
      ratePerHour
      tools
      disciplines
      jobDesription
      jobType
      location
    }
  }
`;
export const deleteJobs = /* GraphQL */ `
  mutation DeleteJobs($input: DeleteJobsInput!) {
    deleteJobs(input: $input) {
      jobId
      offerStartDate
      offerEndDate
      name
      active
      company
      ratePerHour
      tools
      disciplines
      jobDesription
      jobType
      location
    }
  }
`;
export const createMyCustomType = /* GraphQL */ `
  mutation CreateMyCustomType($input: CreateMyCustomTypeInput!) {
    createMyCustomType(input: $input) {
      id
      firstName
      lastName
      email
      linkedInUrl
      job
    }
  }
`;
export const updateMyCustomType = /* GraphQL */ `
  mutation UpdateMyCustomType($input: UpdateMyCustomTypeInput!) {
    updateMyCustomType(input: $input) {
      id
      firstName
      lastName
      email
      linkedInUrl
      job
    }
  }
`;
export const deleteMyCustomType = /* GraphQL */ `
  mutation DeleteMyCustomType($input: DeleteMyCustomTypeInput!) {
    deleteMyCustomType(input: $input) {
      id
      firstName
      lastName
      email
      linkedInUrl
      job
    }
  }
`;
