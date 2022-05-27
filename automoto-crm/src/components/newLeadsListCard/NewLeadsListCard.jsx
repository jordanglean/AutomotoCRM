import React from "react";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

function NewLeadsListCard({ lead }) {
  return (
    <div className="bg-zinc-800 p-4 w-72 h-72 rounded-xl shadow-sm hover:shadow-2xl hover:border-red-200">
      <div className="w-full flex items-center justify-center">
        <GiFullMotorcycleHelmet className="text-white" size={100} />
      </div>
      <div className="mt-2 flex items-center justify-center">
        <h1 className="text-white font-medium text-xl">
          {lead.firstName} {lead.lastName}
        </h1>
      </div>
    </div>
  );
}

export default NewLeadsListCard;
