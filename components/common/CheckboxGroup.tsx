import React from "react";

type Option = {
  value: string | number | boolean;
  label: string;
};

type Props = {
  name: string;
  label: string;
  options: Option[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  values: string[];
  required: boolean;
};

const CheckboxGroup = ({
  name,
  label,
  options,
  onChange,
  onBlur,
  values,
  required,
}: Props) => {
  return (
    <div role="group" aria-describedby={`checkbox-group-${name}`}>
      <p id={`checkbox-group-${name}`} className="font-bold">{`${label}${required ? '*' : ''}:`}</p>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-1">
        {options.map(({ value, label }) => {
          return (
            <label className="flex flex-row items-center gap-2" key={`${value}`}>
              <span>{label}</span>
              <input
                className="flex-shrink-0"
                onChange={onChange}
                onBlur={onBlur}
                id={`${value}`}
                name={name}
                type="checkbox"
                checked={values.includes(`${value}`)}
                value={`${value}`}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
