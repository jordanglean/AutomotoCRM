import React, { useState, useContext } from "react";
import NewLeadsListCard from "../../newLeadsListCard/NewLeadsListCard";
import { IoFilterOutline } from "react-icons/io5";
import NewLeadsContext from "../../../context/NewLeadsContext";

function SearchFilterContainer() {
  // Search Box State
  const [searchText, setSearchText] = useState("");
  const { newLeads } = useContext(NewLeadsContext);

  // Search Box Handler
  const searchBoxHandler = (e) => {
    setSearchText(e.target.value);
  };

  // Filter Handler
  const filterHandler = () => {};

  return (
    <div className="py-4 mt-2">
      <div>
        <h3 className="text-white font-semibold text-4xl tracking-wide">
          {newLeads.length} New Leads
        </h3>
      </div>
      {/* Search and Filter Container */}
      <div className="flex justify-between mt-4">
        <div className="mr-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-full"
            value={searchText}
            onChange={searchBoxHandler}
          />
        </div>
        {/* TODO: Break into components */}
        <div className="flex gap-2 px-4">
          <div className="bg-white pt-2 pl-3 pr-3 pb-2 rounded-full w-28 flex justify-between items-center">
            <p className="font-medium">Bike</p>
            <IoFilterOutline />
          </div>
          <div className="bg-white pt-2 pl-3 pr-3 pb-2 rounded-full w-28 flex justify-between items-center">
            <p className="font-medium">Cash</p>
            <IoFilterOutline />
          </div>
          <div className="bg-white pt-2 pl-3 pr-3 pb-2 rounded-full w-28 flex justify-between items-center">
            <p className="font-medium">Nearest</p>
            <IoFilterOutline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilterContainer;
