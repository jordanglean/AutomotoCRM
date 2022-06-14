import React, { useContext, useState, useEffect } from "react";
import NewLeadsContext from "../../context/NewLead/NewLeadsContext";
// Components Import
import NewLeadsListCard from "../newLeadsListCard/NewLeadsListCard";

function LeadsList() {
  // Context
  const { newLeads, isLoading } = useContext(NewLeadsContext);

  if (newLeads.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-white text-3xl font-semibold">
          No New Leads Found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-4 grid grid-cols-4 gap-6">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl">Loading....</h1>
        </div>
      ) : (
        newLeads.map((lead) => <NewLeadsListCard key={lead.id} lead={lead} />)
      )}
    </div>
  );
}

export default LeadsList;
