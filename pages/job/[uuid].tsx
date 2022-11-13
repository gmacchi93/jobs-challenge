import React from "react";
import Layout from "@/components/common/Layout";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { FetchJobsVariables, Job } from "types";
import InfoSection from "@/components/detail/InfoSection";
import ApplicationForm from "@/components/detail/ApplicationForm";
import JobsController from "controllers/JobsController";
import { listJobIds } from "lib/graphql/queries";

export const getStaticProps: GetStaticProps<{ job: Job }> = async (context) => {
  return {
    props: {
      job: {
        jobId: "uuid",
        name: "Game designer",
        offerStartDate: "2022-12-01T12:00:00.000Z",
        offerEndDate: "2023-02-01T12:00:00.000Z",
        active: true,
        company: "Acme Company",
        ratePerHour: 20,
        tools: ["Unity", "3DMax"],
        disciplines: ["Game Design"],
        jobDesription: "Game design with Unity and 3DMax",
        jobType: "Remote",
        location: "Argentina, Buenos Aires",
      },
    },
  };
};

const DetailPage = ({
  job,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout className="">
      <main>
        <InfoSection job={job} />
        <ApplicationForm job={job} />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let allJobs: Array<string | { params: {}; locale?: string }> = [];
  const variables: FetchJobsVariables = { limit: 100 };
  try {
    do {
      const { listJobs } = await JobsController.fetchJobs(
        variables,
        listJobIds
      );
      const newPaths = listJobs.items.map((job) => ({
        params: { uuid: job.jobId },
      }));

      allJobs = [...allJobs, ...newPaths];

      if (listJobs.nextToken === null) {
        break;
      } else {
        variables.nextToken = listJobs.nextToken;
      }
    } while (true);

    return {
      paths: allJobs,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }

  return {
    paths: [],
    fallback: false,
  };
};

export default DetailPage;
