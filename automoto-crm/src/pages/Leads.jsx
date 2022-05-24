import React from "react";
// Components Import
import LocationLink from "../components/Leads/locationLink/LocationLink";
import SearchFilterContainer from "../components/Leads/searchFilterContainer/SearchFilterContainer";

function Leads() {
  //Dummy Search Result Count
  const resultCount = 20;

  return (
    <div className="p-12">
      <div>
        <LocationLink />
        <SearchFilterContainer />
      </div>
    </div>
  );
}

export default Leads;
