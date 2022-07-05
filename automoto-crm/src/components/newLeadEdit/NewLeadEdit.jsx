import React, { useState, useContext, useEffect } from "react";
// Context
import NewLeadsContext from "../../context/NewLead/NewLeadsContext";
import AlertContext from "../../context/Alert/AlertContext";
// Actions
import { updateNewLead } from "../../context/NewLead/NewLeadsActions";
// Icons
import { AiOutlineCloseCircle } from "react-icons/ai";

function NewLeadEdit() {
  // Show New Lead Edit State
  const [showNewLeadEdit, setShowNewLeadEdit] = useState(false);

  // Alert Context
  const { setAlert } = useContext(AlertContext);

  // Lead Edit Context
  const {
    editItem,
    convertNewLead,
    setLeadEdit,
    dispatch,
    deleteNewLead,
    newLeads,
    isLeadEditOpen,
  } = useContext(NewLeadsContext);

  // Side Effect on leadEdit
  useEffect(() => {
    if (isLeadEditOpen === true) {
      setShowNewLeadEdit(true);
      setFirstName(editItem.firstName);
      setLastName(editItem.lastName);
      setEmail(editItem.email);
      setPhoneNumber(editItem.phoneNumber);
      setPostCode(editItem.postCode);
      setRequireDelivery(editItem.requireDelivery);
      setBike(editItem.bike);
      setRequireFinance(editItem.requireFinance);
    } else {
      setShowNewLeadEdit(false);
    }
  }, [editItem]);

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
    if (isLeadEditOpen === true) {
      dispatch({
        type: "UPDATED_LEAD",
        payload: updateNewLead(editItem.id, updatedLead, newLeads),
      });
      setAlert("Lead has been manually updated", "alert-info");
      setShowNewLeadEdit(false);
    }
  };

  // Submit Convert Lead
  const convertLeadHandler = () => {
    console.log("LEAD CONVERTED");
    const convertedLead = {
      firstName,
      lastName,
      email,
      phoneNumber,
      postCode,
      requireDelivery,
      bike,
      requireFinance,
    };
    convertNewLead(convertedLead);
    setShowNewLeadEdit(false);
    setAlert(
      "New Lead has been successfully moved to converting",
      "alert-success"
    );
  };

  return (
    <>
      {isLeadEditOpen ? (
        <div className="bg-neutral w-[500px] h-screen fixed top-0 right-0 p-6 shadow-xl z-50">
          <div className="w-full items-start justify-cente mb-8">
            <AiOutlineCloseCircle
              className="text-white"
              size={24}
              onClick={() => {
                dispatch({ type: "CLOSE_LEAD_EDIT" });
              }}
            />
          </div>
          <form onSubmit={handleFormSubmit}>
            {/* FIRST AND LAST NAME */}
            <div className="flex justify-between w-full items-center mb-2">
              {/* FIRST NAME */}
              <div>
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  value={firstName}
                  onChange={firstNameHandler}
                />
              </div>
              {/* LAST NAME */}
              <div>
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  value={lastName}
                  onChange={lastNameHandler}
                />
              </div>
            </div>

            {/* EMAIL AND PHONE NUMBER */}
            <div className="flex justify-between items-center w-full mb-2">
              {/* EMAIL */}
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  value={email}
                  onChange={emailHandler}
                />
              </div>
              {/* PHONE NUMBER */}
              <div>
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  value={phoneNumber}
                  onChange={phoneNumberHandler}
                />
              </div>
            </div>

            {/* POST CODE */}
            <div className="mb-2">
              <label className="label">
                <span className="label-text">Post Code</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                value={postCode}
                onChange={postCodeHandler}
              />
            </div>

            {/* REQUIRE DELIVERY AND FINANCE */}
            <div className="flex justify-between items-center w-full gap-12 mb-2">
              {/* Require Delivery */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Require Delivery?</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="requireDelivery"
                  value={requireDelivery}
                  onChange={requireDeliveryHandler}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              {/* Require Finance */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Require Finance?</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="requireFinance"
                  value={requireFinance}
                  onChange={requireFinanceHandler}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            {/* Bike */}
            <div className="w-full mb-8">
              <label className="label">
                <span className="label-text">Bike Intrested In</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                value={bike}
                onChange={bikeHandler}
              />
            </div>
            <div>
              {/* UPDATE BUTTON */}
              <button type="submit" className="btn btn-info w-full mb-2">
                UPDATE
              </button>
              {/* CONVERT LEAD BUTTON */}
              <button
                className="btn btn-success w-full mb-2"
                onClick={() => {
                  convertLeadHandler();
                }}
              >
                CONVERT LEAD
              </button>
              {/* DELETE BUTTON */}
              <button
                className="btn btn-error w-full mb-2"
                onClick={() => {
                  deleteNewLead(editItem.id);
                  setShowNewLeadEdit(false);
                  setAlert(
                    "New Lead has been manually deleted!",
                    "alert-error"
                  );
                }}
              >
                DELETE LEAD
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default NewLeadEdit;
