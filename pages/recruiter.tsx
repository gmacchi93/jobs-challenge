import React, { useEffect } from "react";
import Layout from "@/components/common/Layout";
import JobOfferForm from "@/components/recruiter/JobOfferForm";
import { useSelector } from "react-redux";
import { getApplications } from "selectors/ApplicationSelectors";
import { actionTypes, AppState } from "../types";
import ApplicationItem from "@/components/recruiter/ApplicationItem";
import { useDispatch } from "react-redux";
import { fetchApplications } from "actions";
import getStatus from "selectors/StatusSelectors";
import ListLoader from "@/components/common/ListLoader";

type Props = {};

const RecruiterPage = (props: Props) => {
  const dispatch = useDispatch();
  const { isSuccess, isLoading} = useSelector((state: AppState) => getStatus(state, actionTypes.FETCH_APPLICATIONS));
  const applications = useSelector((state: AppState) => getApplications(state));

  useEffect(() => {
    dispatch(fetchApplications());
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">
        <main>
          <section className="">
            <h2 className="text-3xl text-center">Post a new Job offer</h2>
            <JobOfferForm />
          </section>
          <hr />
          <section className="py-10">
            <h2 className="text-3xl text-center">Applications</h2>
            <ul className="flex flex-col gap-6 py-10">
              {applications?.items.map((application) => (
                <ApplicationItem
                  key={application.id}
                  application={application}
                />
              ))}
              {(isSuccess && !applications?.items.length) && <p>There aren&apos;t any applications yet</p>}
              {(isLoading && !applications?.items.length) && <ListLoader />}
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default RecruiterPage;
