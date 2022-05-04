import React from "react";
// Route Import

// Components Import
import LocationLink from "../components/Leads/locationLink/LocationLink";
import SearchBox from "../components/SearchBox/SearchBox";

function Leads() {
  //Dummy Search Result Count
  const resultCount = 20;

  return (
    <div className="w-5/6 flex flex-col justify-between">
      <div className="w-full py-16 px-10 flex flex-row-reverse justify-between items-center">
        <SearchBox />
        <LocationLink />
      </div>
      <div className="flex justify-end">
        <span className="my-10 mx-20 text-semibold text-white">{`${resultCount} results found.`}</span>
      </div>
    </div>
  );
}

export default Leads;
