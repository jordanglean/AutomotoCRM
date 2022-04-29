import React from "react";
import PropType from "prop-types";
// Icons
import { AiOutlineUserAdd, AiOutlineUserSwitch } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";

function headerNavItem({ iconName }) {
  return (
    <div className="flex-row justify-between items-center">
      <div></div>
      <div></div>
    </div>
  );
}

headerNavItem.propTypes = {
  iconName: PropType.element,
};

export default headerNavItem;
