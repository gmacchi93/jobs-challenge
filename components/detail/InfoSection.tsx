import moment from "moment";
import React from "react";
import { Job } from "types";
import JobAttribute from "./JobAttribute";

type Props = {
  job: Job;
};

const InfoSection = ({
  job: {
    name,
    company,
    jobDesription,
    location,
    ratePerHour,
    tools,
    disciplines,
    jobType,
    offerStartDate,
  },
}: Props) => {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-4 py-12">
        <h1 className="text-5xl">{name}</h1>
        <JobAttribute label="Description" attribute={jobDesription} />
        <div className="flex flex-row flex-wrap gap-8">
          <div className="border border-purple-500 rounded-md p-5">
            <JobAttribute label="Company" attribute={company} />
          </div>
          <div className="border border-purple-500 rounded-md p-5">
            <JobAttribute label="Location" attribute={location} />
          </div>
          <div className="border border-purple-500 rounded-md p-5">
            <JobAttribute label="Rate per hour" attribute={ratePerHour} />
          </div>
          <div className="border border-purple-500 rounded-md p-5">
            <JobAttribute label="Job Type" attribute={jobType} />
          </div>
        </div>
        <JobAttribute label="Disciplines" attribute={disciplines} />
        <JobAttribute label="Tools" attribute={tools} />
        <p className="text-neutral-700 text-sm">
          Published on{" "}
          <time dateTime={offerStartDate}>
            {moment(offerStartDate).format("LL")}
          </time>
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
