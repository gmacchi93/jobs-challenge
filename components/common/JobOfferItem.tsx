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
          <div className="flex flex-col sm:flex-row justify-start md:justify-between items-start md:items-center gap-2 md:gap-8 px-5 py-2">
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p>{company}</p>
            </div>
            <div className="flex flex-col lg:gap-8 lg:flex-row justify-start md:justify-between items-start md:items-center gap-2 px-5 py-2">
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
          </div>
          <div className="px-5 py-2 bg-neutral-100">
            <div className="flex flex-row gap-8 items-center">
              <div className="flex-1 flex flex-col md:flex-row flex-wrap md:gap-3">
                <h4>Tools:</h4>
                <ul className="flex-1 flex flex-row flex-wrap gap-1">
                  {tools.map((tool) => (
                    <li
                      className="first:before:content-none before:content-['∙'] before:mr-1 flex-shrink-0"
                      key={tool}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={`/job/${jobId}`}
                  className="text-purple-600 font-semibold"
                >
                  See more <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default JobOfferItem;
