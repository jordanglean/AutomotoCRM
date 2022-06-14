import React, { useState, useContext } from "react";
import NewLeadsListCard from "../../newLeadsListCard/NewLeadsListCard";
import { IoFilterOutline } from "react-icons/io5";
import NewLeadsContext from "../../../context/NewLead/NewLeadsContext";

function SearchFilterContainer() {
  // Search Box State
  const [searchText, setSearchText] = useState("");
  const [searchMode, setSearchMode] = useState(true);
  const { newLeads, searchLead, clearLeadEdit } = useContext(NewLeadsContext);

  // Search Box Handler
  const searchBoxHandler = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText !== "") {
      searchLead(searchText);
      setSearchMode(false);
    }
  };

  const handleClear = () => {
    setSearchMode(true);
    setSearchText("");
    clearLeadEdit();
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
        <div className="mr-4 flex justify-betwen items-center w-full">
          <div className="mr-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              value={searchText}
              onChange={searchBoxHandler}
            />
          </div>
          <div className="w-full h-full flex items-center align-center">
            {searchMode === false ? (
              <button onClick={handleClear} className="btn">
                Clear
              </button>
            ) : (
              <button onClick={handleSearch} className="btn">
                Search
              </button>
            )}
          </div>
        </div>
        {/* TODO: Break into components */}
        <div className="flex gap-2 px-4">
          <div class="dropdown">
            <label tabindex="0" class="btn m-1">
              <div className="flex justify-between items-center gap-2">
                <span>Bike</span>
                <IoFilterOutline />
              </div>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Indian</a>
              </li>
              <li>
                <a>Fantic</a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <label tabindex="0" class="btn m-1">
              <div className="flex justify-between items-center gap-2">
                <span>Payment</span>
                <IoFilterOutline />
              </div>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <label tabindex="0" class="btn m-1">
              <div className="flex justify-between items-center gap-2">
                <span>Nearest</span>
                <IoFilterOutline />
              </div>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilterContainer;
