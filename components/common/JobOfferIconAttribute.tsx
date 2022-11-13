import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

type Props = {
  icon: IconProp;
  ariaLabel: string;
  attribute: string;
};

const JobOfferIconAttribute = ({ icon, ariaLabel, attribute }: Props) => {
  return (
    <p className="flex flex-row gap-1 items-center">
      <FontAwesomeIcon
        aria-hidden={false}
        aria-label={ariaLabel}
        className="text-purple-600"
        icon={icon}
      />
      {attribute}
    </p>
  );
};

export default JobOfferIconAttribute;
