import React, { useState } from "react";
// Components Import
import LocationLink from "../components/Leads/locationLink/LocationLink";
import SearchFilterContainer from "../components/Leads/searchFilterContainer/SearchFilterContainer";
import AddLeadButton from "../components/addLeadButton/AddLeadButton";
import AddLeadModal from "../components/addLeadModal/AddLeadModal";
import AddLeadForm from "../components/addLeadModal/AddLeadForm";

function Leads() {
  //Dummy Search Result Count
  const resultCount = 20;

  // Modal State
  const [showModal, setShowModal] = useState(false);

  // Handlers
  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <div className="p-12 w-full">
      <div>
        <AddLeadModal show={showModal} handleClose={hideModalHandler}>
          <AddLeadForm handleClose={hideModalHandler}/>
        </AddLeadModal>

        <div className="w-full flex justify-between">
          <LocationLink />
          <AddLeadButton text="New Lead" onClick={showModalHandler} />
        </div>
        <SearchFilterContainer />
      </div>
    </div>
  );
}

export default Leads;
