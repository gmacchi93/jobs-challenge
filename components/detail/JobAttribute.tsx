import React from "react";
import AttributeList from "../common/AttributeList";

type Props = {
    label: string,
    attribute: string | string[] | number;
};

const JobAttribute = ({attribute, label}: Props) => {
  return (
    <div>
      <p className="font-bold">{`${label}:`}</p>
      {Array.isArray(attribute) ? <AttributeList values={attribute} /> : <p>{`${attribute}`}</p>}
    </div>
  );
};

export default JobAttribute;
