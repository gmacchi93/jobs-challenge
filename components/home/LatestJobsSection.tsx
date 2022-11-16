import { fetchLatestJobs } from "actions";
import useMountEffect from "hooks/useMountEffect";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLatestJobs } from "selectors/JobSelectors";
import getStatus from "selectors/StatusSelectors";
import { actionTypes, AppState } from "types";
import ListLoader from "@/components/common/ListLoader";
import JobOfferItem from "@/components/common/JobOfferItem";


type Props = {};

const LatestJobsSection = (props: Props) => {
  const dispatch = useDispatch();
  const latestJobs = useSelector((state: AppState) => getLatestJobs(state));
  const { isLoading, isSuccess } = useSelector((state: AppState) =>
    getStatus(state, actionTypes.FETCH_LATEST_JOBS)
  );

  useMountEffect(() => {
    dispatch(fetchLatestJobs());
  });

  return (
    <section id="latest-jobs" className="bg-slate-50 py-10">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 text-2xl font-semibold">
          Latest jobs
        </h2>
        <ul className="flex flex-col gap-6 p-5 md:px-0">
          {isSuccess && latestJobs.items.map(job => (<JobOfferItem key={job.jobId} job={job} />))}
          {isLoading && <ListLoader />}
          {(isSuccess && !latestJobs.items.length) && <p className="text-center">Sorry, there aren&apos;t any active job offers</p>}
        </ul>
      </div>
    </section>
  );
};

export default LatestJobsSection;
