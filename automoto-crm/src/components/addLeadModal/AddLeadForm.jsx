import React from "react";

function AddLeadForm() {
  return (
    <div>
      <form onSubmit={() => {}}>
        <div className="p-2">
          <label className="mr-2 text-white">Name</label>
          <br />
          <input type="text" />
        </div>
        <div className="p-2">
          <label className="mr-2 text-white">Email</label>
          <br />
          <input type="text" />
        </div>
        <div className="p-2">
          <label className="mr-2 text-white">Phone Number</label>
          <br />
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default AddLeadForm;
