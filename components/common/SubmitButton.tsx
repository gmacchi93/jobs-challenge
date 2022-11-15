import React from "react";

type Props = {
  value: string;
  className?: string;
};

const SubmitButton = ({value, className}: Props) => {
  return (
    <input
      type="submit"
      value={value}
      className={`px-5 py-2 bg-purple-600 rounded-md border border-purple-600 text-white${className ? ` ${className}` : ''}`}
    />
  );
};

export default SubmitButton;
