import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewLeadsContext = createContext();

export const NewLeadsProvider = ({ children }) => {
  const [newLeads, setNewLeads] = useState([
    {
      id: 1,
      firstName: "Jordan",
      lastName: "Veitia",
      email: "jordan@mail.com",
      phoneNumber: "07347723123",
      postCode: "WC234DA",
      requireDelivery: true,
      bike: "Indian FTR 1200",
      requireFinance: false,
    },
  ]);

  // Add New Lead
  const addNewLeadHandler = (newLeadObj) => {
    newLeadObj.id = uuidv4();
    setNewLeads([newLeadObj, ...newLeads]);
  };

  return (
    <NewLeadsContext.Provider value={{ newLeads, addNewLeadHandler }}>
      {children}
    </NewLeadsContext.Provider>
  );
};

export default NewLeadsContext;
