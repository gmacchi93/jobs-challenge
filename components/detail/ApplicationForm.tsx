import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { Job } from "types";
import FormGroup from "../common/FormGroup";

type Props = {
  job: Job;
};

const FEW_DAYS_TO_CLOSE = 15;

const ApplicationForm = ({ job: { offerEndDate } }: Props) => {
  const daysToClose = moment(offerEndDate).diff(moment(), "days");
  const showAlert = daysToClose > 0 && daysToClose < FEW_DAYS_TO_CLOSE;

  return (
    <section>
      <div className="py-12 bg-purple-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl text-center">
              Apply now!{" "}
              <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
            </h2>
            {showAlert && (
              <p className="text-red-500">
                {`You have ${daysToClose} days before this offer closes!`}
              </p>
            )}
            <div className="w-full max-w-xl bg-white rounded-md border border-neutral-300 p-5 my-5">
              <h3 className="text-xl">Please, complete the form</h3>
              <div className="flex flex-col gap-4 mt-10">
                <FormGroup
                  type="text"
                  name="firstName"
                  label="First Name"
                  required
                  onChange={() => {}}
                />
                <FormGroup
                  type="text"
                  name="lastName"
                  label="Last Name"
                  required
                  onChange={() => {}}
                />
                <FormGroup
                  type="text"
                  name="email"
                  label="Email"
                  required
                  onChange={() => {}}
                />
                <FormGroup
                  type="text"
                  name="linkedin"
                  label="LinkedIn profile url"
                  required
                  onChange={() => {}}
                />
                <input
                  className="px-3 py-2 bg-purple-500 rounded-md text-white font-semibold"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
