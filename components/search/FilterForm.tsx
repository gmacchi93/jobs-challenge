import React from "react";
import FormGroup from "../common/FormGroup";

type Props = {};

const FilterForm = (props: Props) => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <FormGroup type="text" onChange={() => {}} name="name" label="Name" />
        <FormGroup
          type="text"
          onChange={() => {}}
          name="company"
          label="Company"
        />
        <FormGroup
          type="text"
          onChange={() => {}}
          name="location"
          label="Location"
        />
        <FormGroup type="text" onChange={() => {}} name="tools" label="Tools" />
        <FormGroup
          type="text"
          onChange={() => {}}
          name="minimunRate"
          label="Minimun rate per hour"
        />
      </div>
    </form>
  );
};

export default FilterForm;
