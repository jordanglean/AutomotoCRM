import React from "react";
import PropType from "prop-types";

function HeaderNav({ heading }) {
  return (
    <div className="flex-col">
      {/* Heading */}
      <div>
        <h3 className="text-md text-white font-semibold">{heading}</h3>
      </div>
      {/* Nav Items */}
      <div>
          
      </div>
    </div>
  );
}

HeaderNav.propTypes = {
  heading: PropType.string,
};

export default HeaderNav;
