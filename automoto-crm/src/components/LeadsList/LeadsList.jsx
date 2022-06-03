import React, { useContext, useState, useEffect } from "react";
import NewLeadsContext from "../../context/NewLeadsContext";
// Components Import
import NewLeadsListCard from "../newLeadsListCard/NewLeadsListCard";

function LeadsList() {
  // Context
  const { newLeads, isLoading } = useContext(NewLeadsContext);
  return (
    <div className="w-full mt-4 grid grid-cols-4 gap-4">
      {isLoading ? (
        <h1 className="text-white font-bold text-4xl">Loading....</h1>
      ) : (
        newLeads.map((lead) => <NewLeadsListCard key={lead.id} lead={lead} />)
      )}
    </div>
  );
}

export default LeadsList;
