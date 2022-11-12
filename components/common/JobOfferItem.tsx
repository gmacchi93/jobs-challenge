import {
  faArrowRight,
  faDollar,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Job } from "types";
import Badge from "./Badge";
import JobOfferIconAttribute from "./JobOfferIconAttribute";

type Props = {
  job: Job;
};

const JobOfferItem = ({
  job: { jobId, name, company, tools, location, ratePerHour, jobType },
}: Props) => {
  return (
    <li>
      <article>
        <div className="flex flex-col rounded-md border border-neutral-300">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2 md:gap-0 px-5 py-2">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p>{company}</p>
            </div>
            <JobOfferIconAttribute
              icon={faLocationPin}
              ariaLabel="Location"
              attribute={location}
            />
            <JobOfferIconAttribute
              icon={faDollar}
              ariaLabel="Rate per hour"
              attribute={`${ratePerHour}/hr`}
            />
            <Badge>{jobType}</Badge>
          </div>
          <div className="px-5 py-2 bg-neutral-200">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <h4>Tools:</h4>
                <ul className="flex flex-row gap-1">
                  {tools.map((tool) => (
                    <li
                      className="first:before:content-none before:content-['∙'] before:mr-1"
                      key={tool}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/job/${jobId}`}
                className="text-purple-500 font-semibold"
              >
                See more <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default JobOfferItem;
