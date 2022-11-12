import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string,
  label: string,
  type: HTMLInputTypeAttribute,
  onChange: ChangeEventHandler,
  required?: boolean,
};

const FormGroup = ({ name, label, type, onChange, required = false }: Props) => {
  return (
    <div>
      <label
        className="block font-medium text-neutral-700"
        htmlFor={name}
      >
        {`${label}${required ? '*' : ''}:`}
      </label>
      <input
        className="mt-1 block w-full rounded-md py-1 px-2 border border-neutral-300"
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
