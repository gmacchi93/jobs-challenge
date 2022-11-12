import React from "react";

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <form action="/search" method="GET">
      <div className="flex flex-row gap-3">
        <input
          name="q"
          className="rounded-md px-5 py-4 flex-1 max-w-xl border border-neutral-200"
          type="text"
          aria-label="Search"
          placeholder="Software developer, Artist, Game designer..."
        />
        <input
          type="submit"
          value="Search Job"
          className="px-5 py-2 bg-purple-500 rounded-md border border-purple-500 text-white"
        />
      </div>
    </form>
  );
};

export default SearchForm;
