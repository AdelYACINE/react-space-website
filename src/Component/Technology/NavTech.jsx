import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavTech = () => {
  const [activeTech, setActiveTech] = useState("activeTech");
  return (
    <div className="navbar-tech">
      <NavLink
        to="/technology/LaunchVehicle"
        className={(NavData) =>
          `nav-link-tech ${activeTech} ${NavData.isActive ? "activeTech" : ""}`
        }
      >
        <p>1</p>
      </NavLink>

      <NavLink
        to="/technology/Spaceport"
        className={(NavData) =>
          `nav-link-tech  ${NavData.isActive ? "activeTech" : ""}`
        }
        onClick={() => {
          setActiveTech("");
        }}
      >
        <p>2</p>
      </NavLink>

      <NavLink
        to="/technology/SpaceCapsule"
        className={(NavData) =>
          `nav-link-tech  ${NavData.isActive ? "activeTech" : ""}`
        }
        onClick={() => {
          setActiveTech("");
        }}
      >
        <p>3</p>
      </NavLink>
    </div>
  );
};

export default NavTech;
