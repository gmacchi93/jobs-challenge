export interface Job {
  jobId: string;
  offerStartDate: string;
  name: string;
  offerEndDate: string;
  active: boolean;
  company: string;
  ratePerHour: number;
  tools: Array<string | null>;
  disciplines: Array<string | null>;
  jobDesription: string;
  jobType: string;
  location: string;
}
