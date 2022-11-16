/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJobs = /* GraphQL */ `
  query GetJobs($jobId: String!) {
    getJobs(jobId: $jobId) {
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
      nextToken
    }
  }
`;
export const listJobIds = /* GraphQL */ `
  query ListJobs(
    $filter: TableJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        jobId
      }
      nextToken
    }
  }
`;
export const getMyCustomType = /* GraphQL */ `
  query GetMyCustomType($id: ID!) {
    getMyCustomType(id: $id) {
      id
      firstName
      lastName
      email
      linkedInUrl
      job
    }
  }
`;
export const listMyCustomTypes = /* GraphQL */ `
  query ListMyCustomTypes(
    $filter: TableMyCustomTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyCustomTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        linkedInUrl
        job
      }
      nextToken
    }
  }
`;
