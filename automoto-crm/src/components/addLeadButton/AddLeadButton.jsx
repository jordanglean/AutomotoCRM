import React from "react";
import PropType from "prop-types";
// Icons Import
import { IoIosAddCircleOutline } from "react-icons/io";

function AddLeadButton({ text, onClick }) {
  return (
    <button
      class="btn btn-primary gap-2 flex items-center justify-center"
      onClick={onClick}
    >
      <div>
        <IoIosAddCircleOutline size={20} />
      </div>
      <div>
        <span>Add New Lead</span>
      </div>
    </button>
  );
}

AddLeadButton.propType = {
  text: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
};

export default AddLeadButton;
