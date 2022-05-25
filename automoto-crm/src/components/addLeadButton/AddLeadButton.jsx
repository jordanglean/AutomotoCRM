import React from "react";
import PropType from "prop-types";
// Icons Import
import { IoIosAddCircleOutline } from "react-icons/io";

function AddLeadButton({ text, onClick }) {
  return (
    <div onClick={onClick}>
      <p className="flex items-center gap-2 text-white font-medium">
        <IoIosAddCircleOutline />
        {text}
      </p>
    </div>
  );
}

AddLeadButton.propType = {
  text: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
};

export default AddLeadButton;
