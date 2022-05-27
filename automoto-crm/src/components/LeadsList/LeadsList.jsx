import React, { useContext } from "react";
import NewLeadsContext from "../../context/NewLeadsContext";
// Components Import
import NewLeadsListCard from "../newLeadsListCard/NewLeadsListCard";

function LeadsList() {
  const { newLeads } = useContext(NewLeadsContext);

  return (
    <div className="w-full mt-4 grid grid-cols-4 gap-4">
      {newLeads.map((lead) => (
        <NewLeadsListCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}

export default LeadsList;
