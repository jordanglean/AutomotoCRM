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
      <section className="bg-stone-900 w-full h-full rounded-xl p-4 shadow-xl">
        <div className="flex justify-end text-white">
          <button type="submit" onClick={() => handleClose()}>
            <IoIosCloseCircleOutline size={25} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

export default AddLeadModal;
