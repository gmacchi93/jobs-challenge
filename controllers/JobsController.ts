import { API, graphqlOperation } from "aws-amplify";
import { listJobs } from "lib/graphql/queries";
import { FetchJobsVariables, ListJobsGraphQL, ListJobsItems } from "types";

class JobsController {
  fetchJobs = async (variables?: FetchJobsVariables, operation:string = listJobs): Promise<ListJobsItems> => {
    const result = await (API.graphql(
      graphqlOperation(operation, variables)
    ) as Promise<ListJobsGraphQL>);
    return result.data;
  };
}

export default new JobsController();
