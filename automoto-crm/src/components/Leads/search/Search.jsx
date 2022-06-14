import React from "react";
import PropType from "react-props";

function Search({ placeholder }) {
  return (
    <div className="flex justify-between">
      <div>
        <input type="text" />
      </div>
      <div>
        <button className="text-xl bg-red-500 w-100h-100">Clear</button>
      </div>
    </div>
  );
}

export default Search;
