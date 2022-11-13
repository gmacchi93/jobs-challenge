import React, { ChangeEventHandler } from "react";
import FormGroup from "../common/FormGroup";

type Props = {
  filters: any,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
};

const FilterForm = ({filters, onChange}: Props) => {

  return (
    <form>
      <div className="flex flex-col gap-4">
        <FormGroup type="text" onChange={onChange} name="name" label="Name" value={filters.name} />
        <FormGroup
          type="text"
          onChange={onChange}
          name="company"
          label="Company"
          value={filters.company}
        />
        <FormGroup
          type="text"
          onChange={onChange}
          name="location"
          label="Location"
          value={filters.location}
        />
        <FormGroup type="text" onChange={onChange} name="tools" label="Tools" value={filters.tools} />
        <FormGroup
          type="text"
          onChange={onChange}
          name="minimunRate"
          label="Minimun rate per hour"
          value={filters.minimunRate}
        />
      </div>
    </form>
  );
};

export default FilterForm;
