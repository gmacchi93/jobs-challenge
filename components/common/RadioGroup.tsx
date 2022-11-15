import React from "react";

type Option = {
  value: string | number | boolean;
  label: string;
};

type Props = {
  name: string;
  required: boolean;
  label: string;
  options: Option[];
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
};

const RadioGroup = ({ name, label, options, onChange, onBlur, required }: Props) => {
  return (
    <div>
      <p id={`group-${name}`} className="font-bold">{`${label}${required ? '*' : ''}:`}</p>
      <div
        role="radiogroup"
        className="flex flex-row flex-wrap gap-x-4 gap-y-1"
        aria-describedby={`group-${name}`}
      >
        {options.map(({ value, label }) => {
          return (
            <div className="flex flex-row items-center gap-2 flex-shrink-0" key={`${value}`}>
              <label htmlFor="">{label}</label>
              <input
                onChange={onChange}
                onBlur={onBlur}
                id={`${value}`}
                name={name}
                type="radio"
                value={`${value}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
