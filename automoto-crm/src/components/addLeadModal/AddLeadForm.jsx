import React, { useState, useContext } from "react";
import PropType from "prop-types";
// Context
import NewLeadsContext from "../../context/NewLead/NewLeadsContext";
import AlertContext from "../../context/Alert/AlertContext";

function AddLeadForm({ handleClose }) {
  // Form Input State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [requireDelivery, setRequireDelivery] = useState(false);
  const [bike, setBike] = useState("");
  const [requireFinance, setRequireFinance] = useState(false);

  // Context
  const { addNewLeadHandler } = useContext(NewLeadsContext);
  const { setAlert } = useContext(AlertContext);

  // Input Handler
  const firstNameHandler = (e) => setFirstName(e.target.value);
  const lastNameHandler = (e) => setLastName(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const phoneNumberHandler = (e) => setPhoneNumber(e.target.value);
  const postCodeHandler = (e) => setPostCode(e.target.value);
  const requireDeliveryHandler = (e) => setRequireDelivery(e.target.value);
  const bikeHandler = (e) => setBike(e.target.value);
  const requireFinanceHandler = (e) => setRequireFinance(e.target.value);

  // Form Sumbit Handler
  const newLeadFormSubmitHandler = (e) => {
    e.preventDefault();
    const newLead = {
      firstName,
      lastName,
      email,
      phoneNumber,
      postCode,
      requireDelivery,
      bike,
      requireFinance,
    };
    addNewLeadHandler(newLead);
    handleClose();
    setAlert("New lead has been manually created!", "success");
  };

  return (
    <div>
      <form onSubmit={newLeadFormSubmitHandler}>
        {/* FIRST AND LAST NAME */}
        <div className="p-2 flex gap-12 mb-4">
          <div>
            <label className="mr-2 text-white ml-1">First Name</label>
            <br />
            <input
              type="text"
              className="bg-gray-300 h-7 rounded-lg px-2 py-4"
              value={firstName}
              onChange={firstNameHandler}
            />
          </div>
          <div>
            <label className="mr-2 text-white ml-1">Last Name</label>
            <br />
            <input
              type="text"
              className="bg-gray-300 h-7 rounded-lg px-2 py-4"
              value={lastName}
              onChange={lastNameHandler}
            />
          </div>
        </div>
        {/* EMAIL AND PHONE NUMBER */}
        <div className="p-2 flex gap-12 mb-4">
          <div>
            <label className="mr-2 text-white ml-1">Email</label>
            <br />
            <input
              type="text"
              className="bg-gray-300 h-7 rounded-lg px-2 py-4"
              value={email}
              onChange={emailHandler}
            />
          </div>
          <div>
            <label className="mr-2 text-white ml-1">Phone Number</label>
            <br />
            <input
              type="text"
              className="bg-gray-300 h-7 rounded-lg px-2 py-4"
              value={phoneNumber}
              onChange={phoneNumberHandler}
            />
          </div>
        </div>
        {/* POSTCODE & REQUIRE DELIVERY*/}
        <div className="p-2 flex gap-12 mb-4">
          <div>
            <label className="mr-2 text-white ml-1">Post Code (optional)</label>
            <br />
            <input
              type="text"
              className="bg-gray-300 h-7 rounded-lg px-2 py-4"
              value={postCode}
              onChange={postCodeHandler}
            />
          </div>
          <div>
            <label className="mr-2 text-white">Require Delivery?</label>
            <br />
            <div className="rounded-lg">
              <select
                name="requireDelivery"
                id="requireDelivery"
                className="bg-gray-300 w-full h-8"
                value={requireDelivery}
                onChange={requireDeliveryHandler}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
        </div>
        {/* BIKE INTRESTED IN & FINANCE */}
        <div className="p-2 flex gap-12">
          <div>
            <label className="mr-2 text-white ml-1">Bike Intrested In</label>
            <br />
            <input
              type="text"
              className="bg-gray-300 h-7 rounded-lg px-2 py-4"
              value={bike}
              onChange={bikeHandler}
            />
          </div>
          <div>
            <div>
              <label className="mr-2 text-white">Require Finance</label>
              <br />
              <div className="rounded-lg">
                <select
                  name="requireFinance"
                  id="requireFinance"
                  className="bg-gray-300 w-full h-8"
                  value={requireFinance}
                  onChange={requireFinanceHandler}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <button
            className="bg-green-400 h-12 w-64 rounded-full flex items-center justify-center text-white font-semibold"
            type="submit"
          >
            ADD NEW LEAD
          </button>
        </div>
      </form>
    </div>
  );
}

AddLeadForm.propType = {
  handleClose: PropType.func.isRequired,
};

export default AddLeadForm;
