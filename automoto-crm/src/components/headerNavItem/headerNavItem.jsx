import React from "react";
import PropType from "prop-types";
// Icons
import {
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
  AiOutlineCheck,
  AiOutlineStock,
  AiOutlineSetting,
  AiOutlineComment,
} from "react-icons/ai";

function HeaderNavItem({ itemName, iconName, iconSize, iconColor }) {
  // Select Icon base on String name
  const getIcon = (iconName) => {
    switch (iconName) {
      case "AiOutlineUserAdd":
        return <AiOutlineUserAdd color={iconColor} size={iconSize} />;
      case "AiOutlineUserSwitch":
        return <AiOutlineUserSwitch color={iconColor} size={iconSize} />;
      case "AiOutlineCheck":
        return <AiOutlineCheck color={iconColor} size={iconSize} />;
      case "AiOutlineStock":
        return <AiOutlineStock color={iconColor} size={iconSize} />;
      case "AiOutlineSetting":
        return <AiOutlineSetting color={iconColor} size={iconSize} />;
      case "AiOutlineComment":
        return <AiOutlineComment color={iconColor} size={iconSize} />;
      default:
        return <AiOutlineUserAdd color={iconColor} size={iconSize} />;
    }
  };

  return (
    <div className="w-full flex items-center mb-5 py-3 -ml-2 rounded-xl hover:bg-gradient-to-r from-green-400 to-blue-500">
      <div className="ml-2">{getIcon(iconName)}</div>
      <div className="ml-4">
        <h4 className="text-xl text-white font-medium">{itemName}</h4>
      </div>
    </div>
  );
}

HeaderNavItem.defaultProps = {
  iconSize: 38,
  iconColor: "white",
};

HeaderNavItem.propTypes = {
  itemName: PropType.string.isRequired,
  iconName: PropType.string.isRequired,
  iconColor: PropType.string,
  iconSize: PropType.number,
};

export default HeaderNavItem;
