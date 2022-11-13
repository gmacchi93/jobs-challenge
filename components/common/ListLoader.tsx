import React from "react";
import ItemLoader from "./ItemLoader";

type Props = {};

const ListLoader = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return <ItemLoader key={index} />;
        })}
    </div>
  );
};

export default ListLoader;
