import React from "react";

type Props = {
  value: string;
  className?: string;
  disabled?: boolean;
};

const SubmitButton = ({ value, className, disabled = false }: Props) => {
  return (
    <input
      disabled={disabled}
      type="submit"
      value={value}
      className={` disabled:bg-neutral-300 disabled:text-neutral-700 px-5 py-2 bg-purple-600 rounded-md border border-purple-600 text-white${
        className ? ` ${className}` : ""
      }`}
    />
  );
};

export default SubmitButton;
