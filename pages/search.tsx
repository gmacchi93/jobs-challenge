import JobOfferItem from "@/components/common/JobOfferItem";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import FormGroup from "@/components/common/FormGroup";
import FilterForm from "@/components/search/FilterForm";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchJobs } from "actions";
import { useSelector } from "react-redux";
import { actionTypes, AppState } from "types";
import { getResultsJobs } from "selectors/JobSelectors";
import getStatus from "selectors/StatusSelectors";
import ListLoader from "@/components/common/ListLoader";

const SearchPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  const {
    query: { q = "" },
  } = router;
  const jobs = useSelector((state: AppState) => getResultsJobs(state));
  const { isLoading, isSuccess } = useSelector((state: AppState) =>
    getStatus(state, actionTypes.FETCH_JOBS)
  );

  const toggleDropdown = () => {
    setIsOpened((prev) => !prev);
  };

  const [filters, setFilters] = useState({
    name: q,
    company: "",
    location: "",
    tools: "",
    minimunRate: null,
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setFilters((filters) => ({
      ...filters,
      [currentTarget.name]: currentTarget.value,
    }));
  };

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    setFilters((filters) => ({ ...filters, name: q }));
  }, [q]);

  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row gap-4 pb-20 p-5 lg:px-0">
        <div className="flex-1">
          <main>
            <h2 className="text-3xl">Search results</h2>
            <div className="py-2 flex flex-col items-center justify-center">
              {isSuccess && (
                <ul className="w-full flex flex-col gap-4">
                  {jobs.items.map((job) => (
                    <JobOfferItem key={job.jobId} job={job} />
                  ))}
                </ul>
              )}
              {isSuccess && !jobs.items.length && (
                <p className="py-10 text-center">
                  Sorry, we can&apos;t find anything with those filters.
                  <br /> Please, try again with another combination of filters.
                </p>
              )}
              {isLoading && <ListLoader />}
            </div>
          </main>
        </div>
        <div className="w-full sm:w-4/12 lg:w-3/12 mt-11">
          <aside className="bg-neutral-100 rounded-md px-5 py-2">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl">Filters</h2>
              <button
                type="button"
                aria-controls="filter-form"
                className="px-2 sm:hidden"
                onClick={toggleDropdown}
                aria-expanded={isOpened}
              >
                <div>
                  <svg
                    className={`transition-all${
                      isOpened ? " transform rotate-180" : ""
                    }`}
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.25 7L6.11959e-07 -9.17939e-07L10.5 0L5.25 7Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div id="filter-form" className={`${isOpened ? "block " : "hidden"} sm:block transition-transform`}>
              <FilterForm filters={filters} onChange={handleChange} />
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
