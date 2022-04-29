import React from "react";
import PropType from "prop-types";

function Header({ heading }) {
  return (
    <div className="bg-stone-900 w-1/5 h-screen p-4">
      <h1 className="text-3xl text-white font-bold">{heading}</h1>
    </div>
  );
}

Header.defaultProps = {
  heading: "CRM Portal",
};

Header.propTypes = {
  heading: PropType.string,
};

export default Header;
