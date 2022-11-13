import React from "react";
import Layout from "@/components/common/Layout";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { FetchJobsVariables, Job } from "types";
import InfoSection from "@/components/detail/InfoSection";
import ApplicationForm from "@/components/detail/ApplicationForm";
import JobsController from "controllers/JobsController";
import { listJobIds } from "grapql/queries";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{ job: Job }> = async (context) => {
  const { params: { uuid = "" } = {} } = context;
  const { getJobs: job } = await JobsController.getJob({
    jobId: uuid as string,
  });
  return { props: { job } };
};

const DetailPage = ({
  job,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Apply | {job.name}</title>
        <meta name="description" content={job.jobDesription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="">
        <main>
          <InfoSection job={job} />
          <ApplicationForm job={job} />
        </main>
      </Layout>
    </>
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
