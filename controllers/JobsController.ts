import { API, graphqlOperation } from "aws-amplify";
import { getJobs, listJobs } from "grapql/queries";
import { FetchJobsVariables, GetJobsGraphQL, GetJobsItems, GetJobVariables, ListJobsGraphQL, ListJobsItems } from "types";

class JobsController {

  getJob = async (variables: GetJobVariables): Promise<GetJobsItems> => {
    const result = await (API.graphql(
      graphqlOperation(getJobs, variables)
    ) as Promise<GetJobsGraphQL>);
    return result.data;
  };

  fetchJobs = async (variables?: FetchJobsVariables, operation:string = listJobs): Promise<ListJobsItems> => {
    const result = await (API.graphql(
      graphqlOperation(operation, variables)
    ) as Promise<ListJobsGraphQL>);
    return result.data;
  };
}

export default new JobsController();
