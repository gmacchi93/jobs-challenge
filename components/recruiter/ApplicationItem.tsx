import { Application } from "@/types/data";
import React from "react";
import JobOfferItem from "../common/JobOfferItem";

type Props = {
  application: Application;
};

const ApplicationItem = ({ application }: Props) => {
  return (
    <li>
      <article>
        <div className="flex flex-col rounded-md border border-neutral-300 p-5 gap-4">
            <h3 className="text-2xl">{application.firstName} {application.lastName}</h3>
            <p>{`Email: ${application.email}`}</p>
            <a className="text-purple-500 cursor-pointer" rel="noreferrer" target="_blank" href={application.linkedInUrl}>LinkedIn Profile</a>
            <hr />
            <h4 className="text-lg font-semibold">Job offer</h4>
            <JobOfferItem job={application.job} />
        </div>
      </article>
    </li>
  );
};

export default ApplicationItem;
