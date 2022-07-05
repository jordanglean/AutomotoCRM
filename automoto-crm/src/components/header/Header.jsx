import React from "react";
import PropType from "prop-types";
import { Link, useLocation } from "react-router-dom";
// Components
import HeaderNav from "../headerNav/HeaderNav";
import HeaderNavItem from "../headerNavItem/HeaderNavItem";

function Header({ heading }) {
  // Nav location
  const location = useLocation();

  // Check if path matches route
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-neutral w-[280px] h-screen p-4 pl-8 shadow-xl fixed">
      <Link to="/">
        <h1 className="text-4xl text-gray-300 font-semibold mb-12 mt-2">
          {heading}
        </h1>
      </Link>
      <div className="">
        {/* Section One */}
        <div className="">
          <div>
            <HeaderNav heading="Tools" />
          </div>
          {/* Nav Items */}
          <div>
            <Link to="/leads">
              <HeaderNavItem
                iconName="AiOutlineUserAdd"
                itemName="Leads"
                active={
                  pathMatchRoute("/leads")
                    ? "bg-gradient-to-r from-green-400 to-blue-500"
                    : ""
                }
              />
            </Link>
            <Link to="/converting">
              <HeaderNavItem
                iconName="AiOutlineUserSwitch"
                itemName="Converting"
                active={
                  pathMatchRoute("/converting")
                    ? "bg-gradient-to-r from-green-400 to-blue-500"
                    : ""
                }
              />
            </Link>
            <Link to="/completed">
              <HeaderNavItem
                iconName="AiOutlineCheck"
                itemName="Completed"
                active={
                  pathMatchRoute("/completed")
                    ? "bg-gradient-to-r from-green-400 to-blue-500"
                    : ""
                }
              />
            </Link>
            <Link to="/analytics">
              <HeaderNavItem
                iconName="AiOutlineStock"
                itemName="Analytics"
                active={
                  pathMatchRoute("/analytics")
                    ? "bg-gradient-to-r from-green-400 to-blue-500"
                    : ""
                }
              />
            </Link>
          </div>
        </div>
        {/* Section One End */}
        {/* Section Two */}
        <div className="mt-4">
          <div>
            <HeaderNav heading="Other" />
          </div>
          <Link to="/settings">
            <HeaderNavItem
              iconName="AiOutlineSetting"
              itemName="Settings"
              active={
                pathMatchRoute("/settings")
                  ? "bg-gradient-to-r from-green-400 to-blue-500"
                  : ""
              }
            />
          </Link>
          <Link to="/support">
            <HeaderNavItem
              iconName="AiOutlineComment"
              itemName="Support"
              active={
                pathMatchRoute("/support")
                  ? "bg-gradient-to-r from-green-400 to-blue-500"
                  : ""
              }
            />
          </Link>
        </div>
      </div>
      {/* Section Two End */}
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
