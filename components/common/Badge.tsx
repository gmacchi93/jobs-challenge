import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Badge = ({ children }: Props) => {
  return (
    <span className="bg-purple-500 px-3 py-0.5 rounded-md text-white font-semibold first-letter:capitalize">
      {children}
    </span>
  );
};

export default Badge;
