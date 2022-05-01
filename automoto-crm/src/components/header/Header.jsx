import React from "react";
import PropType from "prop-types";
// Components
import HeaderNav from "../headerNav/HeaderNav";

function Header({ heading }) {
  return (
    <div className="bg-neutral-900 w-1/6 h-screen p-4 pl-8">
      <h1 className="text-4xl text-white font-bold mb-12 mt-2">{heading}</h1>
      <div>
        <HeaderNav heading="Tools" />
      </div>
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
