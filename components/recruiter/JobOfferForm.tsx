import { useFormik } from "formik";
import React from "react";
import FormGroup from "../common/FormGroup";
import SubmitButton from "../common/SubmitButton";
import * as Yup from "yup";
import { Disciplines, JobField, JobTypes } from "@/types/data";
import RadioGroup from "../common/RadioGroup";
import CheckboxGroup from "../common/CheckboxGroup";
import MultipleTextInput from "../common/MultipleTextInput";

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
  const JobSchema = Yup.object().shape({
    job: Yup.string().min(3, "Too Short!").required("Required"),
    jobDescription: Yup.string().min(2, "Too Short!").required("Required"),
    name: Yup.string().required("Required!"),
    offerEndDate: Yup.date().min(new Date(), "The date must be greater than today!").required("Required!"),
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
      jobId: "",
      offerStartDate: "",
      name: "",
      offerEndDate: "",
      active: "",
      company: "",
      ratePerHour: "",
      tools: [],
      disciplines: [],
      jobDesription: "",
      jobType: "",
      location: "",
    },
    validationSchema: JobSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);

  const getError = (name: JobField) => {
    return formik.touched[name] ? formik.errors[name] : undefined;
  };

  return (
    <form className="max-w-xl mx-auto flex flex-col gap-4 py-5">
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
      <SubmitButton value="Submit" className="w-full mt-5" />
    </form>
  );
};

export default JobOfferForm;
