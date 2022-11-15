import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  name: string,
  label: string,
  type: HTMLInputTypeAttribute,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  required?: boolean,
  value: string | number
  error?: string | string[] | undefined
};

const FormGroup = ({ name, label, type, onChange, onBlur, required = false, value, error }: Props) => {
  return (
    <div>
      <label
        className="block font-bold text-neutral-700"
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
        onBlur={onBlur}
        required={required}
        value={value}
      />
      {error && <p className="text-red-500">{Array.isArray(error) ? error[0] : error}</p>}
    </div>
  );
};

export default FormGroup;
