import { CreateMyCustomTypeMutationVariables } from "@/types/API";
import { API, graphqlOperation } from "aws-amplify";
import { createMyCustomType } from "grapql/mutations";
import { listMyCustomTypes } from "grapql/queries";
import { FetchJobsVariables, ListApplicationItems, ListApplicationsGraphQL } from "../types";

class ApplicationController {

  createApplication = async (application:CreateMyCustomTypeMutationVariables) => {
    const result = await (API.graphql(graphqlOperation(createMyCustomType, application)))
    return result;
  }

  fetchApplications = async (variables?: FetchJobsVariables): Promise<ListApplicationItems> => {
    const result = await (API.graphql(
      graphqlOperation(listMyCustomTypes, variables)
    ) as Promise<ListApplicationsGraphQL>);
    return result.data;
  };
}

export default new ApplicationController();
