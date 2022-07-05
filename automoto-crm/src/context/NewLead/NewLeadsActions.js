// Fetch New Lead Data
export const fetchNewLeadData = async () => {
  const response = await fetch("/newLeads");
  const data = await response.json();
  return data;
};

// Update Lead
export const updateNewLead = async (id, updLead, currentLeads) => {
  const response = await fetch(`/newLeads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updLead),
  });

  const data = await response.json();

  return currentLeads.map((lead) =>
    lead.id === id ? { ...lead, ...data } : lead
  );
};
