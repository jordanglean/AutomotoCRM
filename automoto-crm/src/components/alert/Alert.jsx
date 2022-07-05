import React, { useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";
// Icon Import
import { IoIosCheckmarkCircle } from "react-icons/io";

function Alert() {
  // Alert Context
  const { alert } = useContext(AlertContext);

  return (
    <div
      className={`alert ${alert?.type} shadow-lg w-full mb-4 h-10 ${
        alert === null && "hidden"
      }`}
    >
      <div>
        <span className="text-md font-semibold flex justify-center items-center gap-2">
          <IoIosCheckmarkCircle size={20} />
          {alert?.msg}
        </span>
      </div>
    </div>
  );
}

export default Alert;
