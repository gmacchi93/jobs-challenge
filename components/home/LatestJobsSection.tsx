import { fetchLatestJobs } from "actions";
import useMountEffect from "hooks/useMountEffect";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLatestJobs } from "selectors/JobSelectors";
import { AppState } from "types";
import JobOfferItem from "../common/JobOfferItem";

type Props = {};

const LatestJobsSection = (props: Props) => {
  const dispatch = useDispatch();
  const latestJobs = useSelector((state: AppState) => getLatestJobs(state));

  useMountEffect(() => {
    dispatch(fetchLatestJobs());
  });

  return (
    <section id="latest-jobs" className="bg-slate-50 py-10">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 text-2xl font-semibold">
          Latest jobs
        </h2>
        <ul className="flex flex-col gap-6">
          {latestJobs.items.map(job => (<JobOfferItem key={job.jobId} job={job} />))}
        </ul>
      </div>
    </section>
  );
};

export default LatestJobsSection;
