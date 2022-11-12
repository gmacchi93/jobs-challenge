/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJobs = /* GraphQL */ `
  query GetJobs($jobId: String!, $offerStartDate: AWSDateTime!) {
    getJobs(jobId: $jobId, offerStartDate: $offerStartDate) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: TableJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
