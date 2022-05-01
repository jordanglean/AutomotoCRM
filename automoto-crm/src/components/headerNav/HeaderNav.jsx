import React from "react";
import PropType from "prop-types";
// Components
import HeaderNavItem from "../headerNavItem/HeaderNavItem";

function HeaderNav({ heading }) {
  return (
    <div className="flex-col">
      {/* Heading */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-500 font-semibold">{heading}</h3>
      </div>
      {/* Nav Items */}
      <div>
        <HeaderNavItem iconName="AiOutlineUserAdd" itemName="Leads" />
        <HeaderNavItem iconName="AiOutlineUserSwitch" itemName="Converting" />
        <HeaderNavItem iconName="AiOutlineCheck" itemName="Completed" />
        <HeaderNavItem iconName="AiOutlineStock" itemName="Analytics" />
      </div>
    </div>
  );
}

HeaderNav.propTypes = {
  heading: PropType.string,
};

export default HeaderNav;
