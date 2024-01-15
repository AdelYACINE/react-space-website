import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavCrew = () => {
  const [activeCrew, setActiveCrew] = useState("activeCrew");
  return (
    <div className="navbar navbar-crew ">
      <NavLink
        className={(NavData) =>
          `link-crew  ${NavData.isActive ? "activeCrew" : ""}`
        }
        to="/crew/DouglasHurley"
        onClick={() => {
          setActiveCrew("");
        }}
      >
        <div className="nav-crew"></div>
      </NavLink>

      <NavLink
        to="/crew/MarkShuttleworth"
        className={(NavData) =>
          `link-crew  ${NavData.isActive ? "activeCrew" : ""}`
        }
        onClick={() => {
          setActiveCrew("");
        }}
      >
        <div className="nav-crew"></div>
      </NavLink>

      <NavLink
        to="/crew/VictorGlover"
        className={(NavData) =>
          `link-crew   ${NavData.isActive ? "activeCrew" : ""}`
        }
        onClick={() => {
          setActiveCrew("");
        }}
      >
        <div className="nav-crew"></div>
      </NavLink>

      <NavLink
        to="/crew/AnoushehAnsari"
        className={(NavData) =>
          `link-crew ${activeCrew}  ${NavData.isActive ? "activeCrew" : ""}`
        }
      >
        <div className="nav-crew"></div>
      </NavLink>
    </div>
  );
};

export default NavCrew;
