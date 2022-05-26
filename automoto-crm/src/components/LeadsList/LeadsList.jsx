import React, { useContext } from "react";
import NewLeadsContext from "../../context/NewLeadsContext";

function LeadsList() {
  const { newLeads } = useContext(NewLeadsContext);

  return (
    <div>
      {newLeads.map((lead) => (
        <h1 key={lead.firstName}>{lead.firstName}</h1>
      ))}
    </div>
  );
}

export default LeadsList;
