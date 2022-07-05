import { createContext, useReducer, useEffect } from "react";
import newLeadReducer from "./NewLeadsReducer";

const NewLeadsContext = createContext();

export const NewLeadsProvider = ({ children }) => {
  // Init State
  const initialState = {
    newLeads: [],
    isLoading: true,
    editItem: {},
    isLeadEditOpen: false,
  };

  const [state, dispatch] = useReducer(newLeadReducer, initialState);

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Search Lead
  const searchLead = async (lead) => {
    setLoading();
    const param = new URLSearchParams({
      firstName: lead,
    });
    const response = await fetch(`/newLeads?${param}`);
    const data = await response.json();

    dispatch({
      type: "SEARCH_LEAD",
      payload: data,
    });
  };

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

    dispatch({
      type: "ADD_NEW_LEAD",
      payload: [data, ...state.newLeads],
    });
  };

  // Convert New lead
  const convertNewLead = async (newLeadObj) => {
    const response = await fetch("/convertingLeads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLeadObj),
    });
  };

  // Delete Leads
  const deleteNewLead = async (id) => {
    await fetch(`/newLeads/${id}`, { method: "DELETE" });
    dispatch({
      type: "DELETE_LEAD",
      payload: state.newLeads.filter((item) => item.id !== id),
    });
  };

  // Set Edit Lead
  const setEditLead = (item) => {
    dispatch({
      type: "SET_ITEM_TO_EDIT",
      payload: item,
    });
  };

  // Clear Lead Edit
  const clearLeadEdit = () => {
    setLoading();
    dispatch({
      type: "CLEAR_LEAD_SEARCH",
    });
  };

  // Close Lead Edit
  const closeLeadEdit = () => dispatch({ type: "CLOSE_LEAD_EDIT" });

  // Get number of Loads
  const getNewLeadsCount = () => state.newLeads.length;

  return (
    <NewLeadsContext.Provider
      value={{
        ...state,
        dispatch,
        addNewLeadHandler,
        setEditLead,
        closeLeadEdit,
        getNewLeadsCount,
        deleteNewLead,
        convertNewLead,
        searchLead,
        clearLeadEdit,
      }}
    >
      {children}
    </NewLeadsContext.Provider>
  );
};

export default NewLeadsContext;
