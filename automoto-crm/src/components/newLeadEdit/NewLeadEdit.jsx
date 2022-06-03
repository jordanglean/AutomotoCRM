import React, { useState, useContext, useEffect } from "react";
import NewLeadsContext from "../../context/NewLeadsContext";
// Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

function NewLeadEdit() {
  // Show New Lead Edit State
  const [showNewLeadEdit, setShowNewLeadEdit] = useState(false);

  // Lead Edit Context
  const { leadEdit, setEditLead, setLeadEdit, updateNewLead, deleteNewLead } =
    useContext(NewLeadsContext);

  // Side Effect on leadEdit
  useEffect(() => {
    if (leadEdit.edit === true) {
      setShowNewLeadEdit(true);
    } else {
      setShowNewLeadEdit(false);
    }
    setFirstName(leadEdit.item.firstName);
    setLastName(leadEdit.item.lastName);
    setEmail(leadEdit.item.email);
    setPhoneNumber(leadEdit.item.phoneNumber);
    setPostCode(leadEdit.item.postCode);
    setRequireDelivery(leadEdit.item.requireDelivery);
    setBike(leadEdit.item.bike);
    setRequireFinance(leadEdit.item.requireFinance);
  }, [leadEdit]);

  // Form Input State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [requireDelivery, setRequireDelivery] = useState("");
  const [bike, setBike] = useState("");
  const [requireFinance, setRequireFinance] = useState("");

  // Input Handler
  const firstNameHandler = (e) => setFirstName(e.target.value);
  const lastNameHandler = (e) => setLastName(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const phoneNumberHandler = (e) => setPhoneNumber(e.target.value);
  const postCodeHandler = (e) => setPostCode(e.target.value);
  const requireDeliveryHandler = (e) => setRequireDelivery(e.target.value);
  const bikeHandler = (e) => setBike(e.target.value);
  const requireFinanceHandler = (e) => setRequireFinance(e.target.value);

  // Close Edit New Lead
  const closeEditNewLead = () => setLeadEdit({ item: {}, edit: false });

  // Submit Update
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITED!!");
    const updatedLead = {
      firstName,
      lastName,
      email,
      phoneNumber,
      postCode,
      requireDelivery,
      bike,
      requireFinance,
    };
    if (leadEdit.edit === true) {
      updateNewLead(leadEdit.item.id, updatedLead);
    }
  };

  // Delete Handler

  return (
    <>
      {showNewLeadEdit ? (
        <div className="bg-neutral-900 w-[500px] h-screen fixed top-0 right-0 p-8 shadow-xl">
          <div className="w-full items-start justify-cente mb-8">
            <AiOutlineCloseCircle
              className="text-white"
              size={24}
              onClick={() => closeEditNewLead()}
            />
          </div>
          <form onSubmit={handleFormSubmit}>
            {/* FIRST NAME */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                First Name:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={firstNameHandler}
              />
            </div>
            {/* LAST NAME */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Last Name:
              </label>
              <input type="text" value={lastName} onChange={lastNameHandler} />
            </div>
            {/* EMAIL */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Email:
              </label>
              <input type="text" value={email} onChange={emailHandler} />
            </div>
            {/* PHONE NUMBER */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Phone Number:
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={phoneNumberHandler}
              />
            </div>
            {/* POST CODE */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Post Code:
              </label>
              <input type="text" value={postCode} onChange={postCodeHandler} />
            </div>
            {/* Require Delivery */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Require Delivery:
              </label>
              <select
                name="requireDelivery"
                value={requireDelivery}
                onChange={requireDeliveryHandler}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            {/* Require Finance */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Require Finance:
              </label>
              <select
                name="requireFinance"
                value={requireFinance}
                onChange={requireFinanceHandler}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            {/* Bike */}
            <div className="mb-4">
              <label htmlFor="FirstName" className="text-white mr-4">
                Bike Intrested In:
              </label>
              <input type="text" value={bike} onChange={bikeHandler} />
            </div>
            <div className="mt-24 flex-col-reverse items-center justify-end">
              {/* UPDATE BUTTON */}
              <div className="mt-4 flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-sky-500 w-full flex items-center justify-center p-2 rounded-xl hover:bg-sky-600"
                >
                  <p className="text-white font-semibold text-sm tracking-wider">
                    UPDATE
                  </p>
                </button>
              </div>
              {/* DELETE BUTTON */}
              <div className="mt-4 flex items-center justify-center">
                <div
                  className="bg-red-800 w-full flex items-center justify-center p-2 rounded-xl hover:bg-sky-600"
                  onClick={() => {
                    deleteNewLead(leadEdit.item.id);
                  }}
                >
                  <p className="text-white font-semibold text-sm tracking-wider">
                    DELETE LEAD
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default NewLeadEdit;
