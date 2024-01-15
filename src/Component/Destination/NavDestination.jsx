import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavDestination = () => {
  const [active, setActive] = useState("active");
  return (
    <div className="navbar navbar-destination ">
      <NavLink
        className={(NavData) =>
          `nav-link nav-destination ${NavData.isActive ? "active" : ""}`
        }
        to="/destination/moon"
        onClick={() => {
          setActive("");
        }}
      >
        MOON
      </NavLink>

      <NavLink
        to="/destination/mars"
        className={(NavData) =>
          `nav-link nav-destination ${active} ${
            NavData.isActive ? "active" : ""
          } `
        }
      >
        MARS
      </NavLink>

      <NavLink
        to="/destination/europa"
        className={(NavData) =>
          `nav-link nav-destination  ${NavData.isActive ? "active" : ""}`
        }
        onClick={() => {
          setActive("");
        }}
      >
        EUROPA
      </NavLink>

      <NavLink
        to="/destination/titan"
        className={(NavData) =>
          `nav-link nav-destination  ${NavData.isActive ? "active" : ""}`
        }
        onClick={() => {
          setActive("");
        }}
      >
        TITAN
      </NavLink>
    </div>
  );
};

export default NavDestination;
