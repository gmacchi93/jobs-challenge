import React from "react";
import JobOfferItem from "../common/JobOfferItem";

type Props = {};

const LatestJobsSection = (props: Props) => {
  return (
    <section id="latest-jobs" className="bg-slate-50 py-10">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 text-2xl font-semibold">
          Latest jobs
        </h2>
        <ul className="flex flex-col gap-6">
          <JobOfferItem
            job={{
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
            }}
          />
        </ul>
      </div>
    </section>
  );
};

export default LatestJobsSection;
