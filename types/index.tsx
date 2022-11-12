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
