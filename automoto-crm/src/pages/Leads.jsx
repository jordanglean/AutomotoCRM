import React from "react";
// Components Import
import LocationLink from "../components/Leads/locationLink/LocationLink";
import SearchFilterContainer from "../components/Leads/searchFilterContainer/SearchFilterContainer";

function Leads() {
  return (
    <div className="p-16 w-full">
      <LocationLink />
      <SearchFilterContainer />
    </div>
  );
}

export default Leads;
