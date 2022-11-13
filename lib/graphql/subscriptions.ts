/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJobs = /* GraphQL */ `
  subscription OnCreateJobs(
    $jobId: String
    $offerStartDate: AWSDateTime
    $name: String
    $offerEndDate: AWSDateTime
    $active: Boolean
  ) {
    onCreateJobs(
      jobId: $jobId
      offerStartDate: $offerStartDate
      name: $name
      offerEndDate: $offerEndDate
      active: $active
    ) {
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
export const onUpdateJobs = /* GraphQL */ `
  subscription OnUpdateJobs(
    $jobId: String
    $offerStartDate: AWSDateTime
    $name: String
    $offerEndDate: AWSDateTime
    $active: Boolean
  ) {
    onUpdateJobs(
      jobId: $jobId
      offerStartDate: $offerStartDate
      name: $name
      offerEndDate: $offerEndDate
      active: $active
    ) {
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
export const onDeleteJobs = /* GraphQL */ `
  subscription OnDeleteJobs(
    $jobId: String
    $offerStartDate: AWSDateTime
    $name: String
    $offerEndDate: AWSDateTime
    $active: Boolean
  ) {
    onDeleteJobs(
      jobId: $jobId
      offerStartDate: $offerStartDate
      name: $name
      offerEndDate: $offerEndDate
      active: $active
    ) {
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
