import { createContext, useState, useEffect } from "react";

const ConvertingLeadContex = createContext();

export const ConvertingLeadProvider = ({ children }) => {
  // Converting Lead State
  const [convertingLeads, setConvertingLeads] = useState([]);
  // Loading State
  const [isLoading, setIsLoading] = useState(true);

  // Set State converted lead data
  useEffect(() => {}, []);

  const fetchConvertingLeadsData = async () => {
    const response = await fetch("/convertingLeads");
    const data = await response.json();
    setConvertingLeads(data);
    setIsLoading(false);
  };

  return (
    <ConvertingLeadContex.Provider>{children}</ConvertingLeadContex.Provider>
  );
};
