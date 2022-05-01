import React from "react";
import PropType from "prop-types";
// Components
import HeaderNav from "../headerNav/HeaderNav";
import HeaderNavItem from "../headerNavItem/HeaderNavItem";

function Header({ heading }) {
  return (
    <div className="bg-neutral-900 w-1/6 h-screen p-4 pl-8 shadow-xl">
      <h1 className="text-4xl text-gray-300 font-semibold mb-12 mt-2">
        {heading}
      </h1>
      <div className="">
        {/* Section One */}
        <div className="">
          <div>
            <HeaderNav heading="Tools" />
          </div>
          {/* Nav Items */}
          <div>
            <HeaderNavItem iconName="AiOutlineUserAdd" itemName="Leads" />
            <HeaderNavItem
              iconName="AiOutlineUserSwitch"
              itemName="Converting"
            />
            <HeaderNavItem iconName="AiOutlineCheck" itemName="Completed" />
            <HeaderNavItem iconName="AiOutlineStock" itemName="Analytics" />
          </div>
        </div>
        {/* Section One End */}
        {/* Section Two */}
        <div className="mt-4">
          <div>
            <HeaderNav heading="Other" />
          </div>
          <HeaderNavItem iconName="AiOutlineSetting" itemName="Settings" />
          <HeaderNavItem iconName="AiOutlineComment" itemName="Support" />
        </div>
      </div>
      {/* Section Two End */}
    </div>
  );
}
sadsa da das dasd as 
asd asd as
sd ad 

Header.defaultProps = {
  heading: "CRM Portal",
};

Header.propTypes = {
  heading: PropType.string,
};

export default Header;
