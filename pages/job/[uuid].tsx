import React from "react";
import moment from "moment";
import FormGroup from "@/components/common/FormGroup";
import Layout from "@/components/common/Layout";
import JobAttribute from "@/components/detail/JobAttribute";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Job } from "types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import InfoSection from "@/components/detail/InfoSection";
import ApplicationForm from "@/components/detail/ApplicationForm";

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

const DetailPage = ({job}: InferGetStaticPropsType<typeof getStaticProps>) => {
  

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
  return {
    paths: [{ params: { uuid: "uuid1" } }, { params: { uuid: "uuid2" } }],
    fallback: false,
  };
};

export default DetailPage;
