import React, { useContext } from "react";
import NewLeadsContext from "../../context/NewLead/NewLeadsContext";
// Icons
import { FaTruck } from "react-icons/fa";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

function NewLeadsListCard({ lead }) {
  const { setEditLead } = useContext(NewLeadsContext);

  return (
    <div class="indicator w-auto">
      <span class="indicator-item indicator-center badge badge-secondary">
        Web
      </span>
      <div>
        <div class="card bg-base-300 shadow-sm hover:shadow-2xl">
          <figure>
            <img
              src="http://www.motor-software.co.uk/wp-content/uploads/motorcyclist.jpg"
              alt="New Lead"
            />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title">
              {lead.firstName} {lead.lastName}
            </h2>
            <div className="my-4 flex items-center justify-between gap-2">
              <p className="font-medium uppercase">{lead.bike}</p>
            </div>
            <div class="card-actions justify-center">
              <div class="badge badge-outline flex justify-center items-end gap-2">
                <div>
                  <FaTruck size={17} />
                </div>
                <div>
                  <span>
                    {lead.requireDelivery === true ? "Deliver" : "No"}
                  </span>
                </div>
              </div>
              <div class="badge badge-outline flex items-center justify-center gap-2">
                <RiMoneyPoundCircleFill size={17} />
                {lead.requireFinance === true ? "Finance" : "Cash"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLeadsListCard;

/* <div className="bg-zinc-800 p-4 w-72 h-auto rounded-xl shadow-sm hover:shadow-2xl hover:border-red-200">
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
      {/* EDIT LEAD BUTTON */

//   <div className="mt-4 flex items-center justify-center">
//     <div
//       className="bg-sky-900 w-full flex items-center justify-center p-2 rounded-xl hover:bg-sky-600"
//       onClick={() => setEditLead(lead)}
//     >
//       <p className="text-white font-semibold text-sm tracking-wider">
//         VIEW LEAD
//       </p>
//     </div>
//   </div>
// </div> */}
