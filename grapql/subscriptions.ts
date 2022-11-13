/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJobs = /* GraphQL */ `
  subscription OnCreateJobs(
    $jobId: String
    $offerStartDate: AWSDateTime
    $offerEndDate: AWSDateTime
    $name: String
    $active: Boolean
  ) {
    onCreateJobs(
      jobId: $jobId
      offerStartDate: $offerStartDate
      offerEndDate: $offerEndDate
      name: $name
      active: $active
    ) {
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
export const onUpdateJobs = /* GraphQL */ `
  subscription OnUpdateJobs(
    $jobId: String
    $offerStartDate: AWSDateTime
    $offerEndDate: AWSDateTime
    $name: String
    $active: Boolean
  ) {
    onUpdateJobs(
      jobId: $jobId
      offerStartDate: $offerStartDate
      offerEndDate: $offerEndDate
      name: $name
      active: $active
    ) {
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
export const onDeleteJobs = /* GraphQL */ `
  subscription OnDeleteJobs(
    $jobId: String
    $offerStartDate: AWSDateTime
    $offerEndDate: AWSDateTime
    $name: String
    $active: Boolean
  ) {
    onDeleteJobs(
      jobId: $jobId
      offerStartDate: $offerStartDate
      offerEndDate: $offerEndDate
      name: $name
      active: $active
    ) {
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
