import { useFormik } from "formik";
import React, { useEffect } from "react";
import FormGroup from "../common/FormGroup";
import SubmitButton from "../common/SubmitButton";
import * as Yup from "yup";
import { AppState, Disciplines, Job, JobField, JobTypes } from "@/types/data";
import RadioGroup from "../common/RadioGroup";
import CheckboxGroup from "../common/CheckboxGroup";
import MultipleTextInput from "../common/MultipleTextInput";
import { useDispatch, useSelector } from "react-redux";
import getStatus from "selectors/StatusSelectors";
import { actionTypes } from "@/types/actions";
import { createJob } from "actions";
import * as uuid from 'uuid';

type Props = {};

const JOB_TYPES_OPTIONS = [
  { label: JobTypes.ONSITE, value: JobTypes.ONSITE },
  { label: JobTypes.REMOTE, value: JobTypes.REMOTE },
  { label: JobTypes.HYBRID, value: JobTypes.HYBRID },
];

const JOB_DISCIPLINES_OPTIONS = [
  { label: Disciplines.ANIMATION, value: Disciplines.ANIMATION },
  { label: Disciplines.ART, value: Disciplines.ART },
  { label: Disciplines.AUDIO, value: Disciplines.AUDIO },
  { label: Disciplines.ECONOMY, value: Disciplines.ECONOMY },
  { label: Disciplines.ENGINEERING, value: Disciplines.ENGINEERING },
  { label: Disciplines.GAME_DESIGN, value: Disciplines.GAME_DESIGN },
  { label: Disciplines.UXUI_DESIGN, value: Disciplines.UXUI_DESIGN },
];

const JobOfferForm = (props: Props) => {
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess } = useSelector((state: AppState) =>
    getStatus(state, actionTypes.CREATE_JOB)
  );

  const JobSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").required("Required"),
    offerEndDate: Yup.date()
      .min(new Date(), "The date must be greater than today!")
      .required("Required!"),
    company: Yup.string().required("Required!"),
    ratePerHour: Yup.string().required("Required!"),
    tools: Yup.mixed<string[]>().required("Required!"),
    disciplines: Yup.mixed<Disciplines[]>().required("Required!"),
    jobDesription: Yup.string().required("Required!"),
    jobType: Yup.mixed<JobTypes>().required("Required!"),
    location: Yup.string().required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      jobId: uuid.v4(),
      offerStartDate: new Date().toISOString(),
      name: "",
      offerEndDate: "",
      active: true,
      company: "",
      ratePerHour: 0,
      tools: [],
      disciplines: [],
      jobDesription: "",
      jobType: JobTypes.ONSITE,
      location: "",
    },
    validationSchema: JobSchema,
    onSubmit: (values:Job) => {
      dispatch(createJob({ 
        ...values, 
        offerEndDate: new Date(values.offerEndDate).toISOString(),
        offerStartDate: new Date().toISOString(),
      }));
    },
  });

  const getError = (name: JobField) => {
    return formik.touched[name] ? formik.errors[name] : undefined;
  };

  useEffect(() => {
    if(isSuccess){
      formik.resetForm();
    }
  }, [isSuccess]);
  

  return (
    <form className="max-w-xl mx-auto flex flex-col gap-4 py-5" onSubmit={formik.handleSubmit}>
      <FormGroup
        required
        name="name"
        label="Name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["name"]}
        error={getError("name")}
      />
      <FormGroup
        required
        name="offerEndDate"
        label="Offer end date"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["offerEndDate"]}
        error={getError("offerEndDate")}
      />
      <FormGroup
        required
        name="company"
        label="Company"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["company"]}
        error={getError("company")}
      />
      <FormGroup
        required
        name="ratePerHour"
        label="Rate per hour"
        type={"number"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["ratePerHour"]}
        error={getError("ratePerHour")}
      />
      <MultipleTextInput
        required
        label="Tools"
        name="tools"
        values={formik.values["tools"]}
        addValue={(value: string) => {
          formik.setFieldValue("tools", [...formik.values["tools"], value]);
        }}
        removeValue={(deletedValue: string) => {
          formik.setFieldValue(
            "tools",
            formik.values["tools"].filter((value) => value !== deletedValue)
          );
        }}
      />
      <CheckboxGroup
        required
        label="Disciplines"
        name="disciplines"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        values={formik.values["disciplines"]}
        options={JOB_DISCIPLINES_OPTIONS}
      />
      <FormGroup
        required
        name="jobDesription"
        label="Job Description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["jobDesription"]}
        error={getError("jobDesription")}
      />
      <RadioGroup
        required
        name="jobType"
        options={JOB_TYPES_OPTIONS}
        label="Job Type"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormGroup
        required
        name="location"
        label="Location"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values["location"]}
        error={getError("location")}
      />
      <SubmitButton
        disabled={isLoading}
        value="Submit"
        className="w-full mt-5"
      />
      {isSuccess && (
        <p className="text-green-500 font-semibold">Job created successfuly!</p>
      )}
      {isError && (
        <p className="text-red-500 font-semibold">
          Something went wrong. Please, try again
        </p>
      )}
    </form>
  );
};

export default JobOfferForm;
