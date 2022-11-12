import React from "react";

type Props = {
    values: string[]
};

const AttributeList = ({values}: Props) => {
  return (
    <ul className="flex flex-row gap-1">
      {values.map((value) => (
        <li
          className="first:before:content-none before:content-['∙'] before:mr-1"
          key={value}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default AttributeList;
