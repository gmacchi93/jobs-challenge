import FormGroup from "@/components/common/FormGroup";
import Layout from "@/components/common/Layout";
import SubmitButton from "@/components/common/SubmitButton";
import JobOfferForm from "@/components/recruiter/JobOfferForm";
import React from "react";

type Props = {};

const RecruiterPage = (props: Props) => {
  return (
    <Layout>
      <div className="flex flex-col">
        <main>
          <section className="">
            <h2 className="text-3xl text-center">Post a new Job offer</h2>
            <JobOfferForm />
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default RecruiterPage;
