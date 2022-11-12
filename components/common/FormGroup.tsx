import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler;
};

const FormGroup = ({ name, label, type, onChange }: Props) => {
  return (
    <div>
      <label
        className="block font-medium text-neutral-700"
        htmlFor={name}
      >
        {`${label}:`}
      </label>
      <input
        className="mt-1 block w-full rounded-md py-1 px-2"
        type={type}
        id={name}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default FormGroup;
