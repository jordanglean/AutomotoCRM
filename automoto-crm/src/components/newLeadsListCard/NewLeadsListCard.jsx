import React, { useContext } from "react";
import NewLeadsContext from "../../context/NewLeadsContext";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

function NewLeadsListCard({ lead }) {
  const { setEditLead } = useContext(NewLeadsContext);

  return (
    <div className="bg-zinc-800 p-4 w-72 h-auto rounded-xl shadow-sm hover:shadow-2xl hover:border-red-200">
      <div className="w-full flex items-center justify-center">
        <GiFullMotorcycleHelmet className="text-white" size={100} />
      </div>
      <div className="mt-2 flex items-center justify-center">
        <p className="text-white text-xl">
          {lead.firstName} {lead.lastName}
        </p>
      </div>
      <hr className="text-white m-2" />
      <div className="mt-2 flex items-center justify-center">
        <p className="text-white font-semibold text-lg">{lead.bike}</p>
      </div>
      <hr className="text-white m-2" />
      <div className="mt-2 flex items-center justify-center">
        <p className="text-white uppercase font-light text-sm">
          Needs Delivery:
          <span className="font-semibold">
            {lead.requireDelivery ? "Yes" : "No"}
          </span>
        </p>
      </div>
      <div className="mt-1 flex items-center justify-center">
        <p className="text-white uppercase font-light text-sm">
          Payment:
          <span className="font-semibold">
            {lead.requireFinance ? "Finance" : "Cash"}
          </span>
        </p>
      </div>
      {/* EDIT LEAD BUTTON */}
      <div className="mt-4 flex items-center justify-center">
        <div
          className="bg-sky-900 w-full flex items-center justify-center p-2 rounded-xl hover:bg-sky-600"
          onClick={() => setEditLead(lead)}
        >
          <p className="text-white font-semibold text-sm tracking-wider">
            VIEW LEAD
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewLeadsListCard;
