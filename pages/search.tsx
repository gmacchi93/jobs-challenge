import JobOfferItem from "@/components/common/JobOfferItem";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import React from "react";
import gameDevIllustration from "@/components/svgs/game-dev-illustration.svg";
import FormGroup from "@/components/common/FormGroup";
import FilterForm from "@/components/search/FilterForm";

const SearchPage = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-4 pb-20">
        <div className="flex-1">
          <main>
            <div className="py-2 flex flex-col items-center">
              <h2 className="text-3xl">Search results</h2>
              <ul className="w-full flex flex-col gap-4">
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
              <Image
                src={gameDevIllustration}
                width={500}
                height={500}
                alt="Game developer illustration"
                loading="lazy"
              />
            </div>
          </main>
        </div>
        <div className="w-3/12">
          <aside className="bg-neutral-100 rounded-md px-5 py-2">
            <h2 className="text-2xl">Filters</h2>
            <FilterForm />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
