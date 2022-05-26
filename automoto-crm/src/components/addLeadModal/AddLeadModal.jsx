import React from "react";
import PropType from "prop-types";
// React Icons
import { IoIosCloseCircleOutline } from "react-icons/io";

function AddLeadModal({ handleClose, show, children }) {
  return (
    <div
      className={`${
        !show ? "invisible" : "visible"
      } fixed top-10 left-[600px] w-[600px] h-[600px]`}
    >
      <section className="bg-neutral-900 w-full h-full rounded-xl p-4 shadow-xl">
        <div className="flex justify-end text-gray-300">
          <button type="submit" onClick={() => handleClose()}>
            <IoIosCloseCircleOutline size={25} />
          </button>
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <h4 className="text-white text-3xl">New Lead</h4>
        </div>
        <div className="flex items-center justify-center">
          <hr className="text-white w-[400px]" />
        </div>
        <div className="p-8">{children}</div>
      </section>
    </div>
  );
}

export default AddLeadModal;
