import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const NewLeadsContext = createContext();

export const NewLeadsProvider = ({ children }) => {
  // Lead State
  const [newLeads, setNewLeads] = useState([]);
  // Loading Data State
  const [isLoading, setIsLoading] = useState(true);

  // Set State with fetched Data
  useEffect(() => {
    fetchNewLeadData();
  }, []);

  // Fetch New Lead Data
  const fetchNewLeadData = async () => {
    const response = await fetch("/newLeads");
    const data = await response.json();
    setNewLeads(data);
    setIsLoading(false);
  };

  // Edit Lead State
  const [leadEdit, setLeadEdit] = useState({
    item: {},
    edit: false,
  });

  // Add New Lead
  const addNewLeadHandler = async (newLeadObj) => {
    const response = await fetch("/newLeads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLeadObj),
    });
    const data = await response.JSON();

    setNewLeads([data, ...newLeads]);
  };

  // Delete Leads
  const deleteNewLead = async (id) => {
    await fetch(`/newLeads/${id}`, { method: "DELETE" });
    setNewLeads(newLeads.filter((item) => item.id !== id));
  };

  // Set Edit Lead
  const setEditLead = (item) => {
    setLeadEdit({
      item,
      edit: true,
    });
    console.log("LEAD SET TO EDIT!!", leadEdit);
  };

  // Update Item
  const updateNewLead = async (id, updLead) => {
    const response = await fetch(`/newLeads/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updLead),
    });

    const data = await response.JSON();

    setNewLeads(
      newLeads.map((lead) => (lead.id === id ? { ...lead, ...data } : lead))
    );
  };

  // Get number of Loads
  const getNewLeadsCount = () => newLeads.length;

  return (
    <NewLeadsContext.Provider
      value={{
        newLeads,
        addNewLeadHandler,
        leadEdit,
        setEditLead,
        setLeadEdit,
        updateNewLead,
        isLoading,
        getNewLeadsCount,
        deleteNewLead,
      }}
    >
      {children}
    </NewLeadsContext.Provider>
  );
};

export default NewLeadsContext;
