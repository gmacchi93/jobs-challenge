/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobs = /* GraphQL */ `
  mutation CreateJobs($input: CreateJobsInput!) {
    createJobs(input: $input) {
      jobId
      offerStartDate
      name
      offerEndDate
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
      name
      offerEndDate
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
      name
      offerEndDate
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
