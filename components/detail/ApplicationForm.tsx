import React from "react";
import moment from "moment";
import * as Yup from "yup";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormikConfig, useFormik } from "formik";
import { ApplicationGraphQL, Job } from "types";
import FormGroup from "../common/FormGroup";
import * as uuid from "uuid";
import { useDispatch } from "react-redux";
import { createApplication } from "actions";

type Props = {
  job: Job;
};

interface ApplicationValues {
  id: string;
  job: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedInUrl: string;
}

const FEW_DAYS_TO_CLOSE = 15;

const ApplicationForm = ({ job }: Props) => {
  const dispatch = useDispatch()
  const { offerEndDate } = job;
  const daysToClose = moment(offerEndDate).diff(moment(), "days");
  const showAlert = daysToClose > 0 && daysToClose < FEW_DAYS_TO_CLOSE;

  const ApplicationSchema = Yup.object().shape({
    id: Yup.string(),
    job: Yup.string(),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    linkedInUrl: Yup.string()
      .url("Invalid URL")
      .matches(
        /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
        "Invalid LinkedIn URL"
      )
      .required("Required"),
  });

  const formikConfig: FormikConfig<ApplicationGraphQL> = {
    validationSchema: ApplicationSchema,
    initialValues: {
      id: uuid.v4(),
      job: JSON.stringify(job),
      firstName: "",
      lastName: "",
      email: "",
      linkedInUrl: "",
    },
    onSubmit: (values) => {
      dispatch(createApplication(values));
    },
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik(formikConfig);

  return (
    <section>
      <div className="py-12 bg-purple-100 px-5 md:px-0">
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
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl">Please, complete the form</h3>
                <div className="flex flex-col gap-4 mt-10">
                  <FormGroup
                    type="text"
                    name="firstName"
                    label="First Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    error={touched.firstName ? errors.firstName : ""}
                  />
                  <FormGroup
                    type="text"
                    name="lastName"
                    label="Last Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    error={touched.lastName ? errors.lastName : ""}
                  />
                  <FormGroup
                    type="text"
                    name="email"
                    label="Email"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email ? errors.email : ""}
                  />
                  <FormGroup
                    type="text"
                    name="linkedInUrl"
                    label="LinkedIn profile url"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.linkedInUrl}
                    error={touched.linkedInUrl ? errors.linkedInUrl : ""}
                  />
                  <input
                    className="px-3 py-2 bg-purple-600 rounded-md text-white font-semibold"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
