import { NavLink } from "react-router-dom";
const NavCrew = () => {
  return (
    <div className="navbar navbar-crew ">
      <NavLink
        className={(NavData) =>
          `link-crew  ${NavData.isActive ? "activeCrew" : ""}`
        }
        to="/crew/DouglasHurley"
      >
        <div className="nav-crew"></div>
      </NavLink>

      <NavLink
        to="/crew/MarkShuttleworth"
        className={(NavData) =>
          `link-crew  ${NavData.isActive ? "activeCrew" : ""}`
        }
      >
        <div className="nav-crew"></div>
      </NavLink>

      <NavLink
        to="/crew/VictorGlover"
        className={(NavData) =>
          `link-crew   ${NavData.isActive ? "activeCrew" : ""}`
        }
      >
        <div className="nav-crew"></div>
      </NavLink>

      <NavLink
        to="/crew/AnoushehAnsari"
        className={(NavData) =>
          `link-crew   ${NavData.isActive ? "activeCrew" : ""}`
        }
      >
        <div className="nav-crew"></div>
      </NavLink>
    </div>
  );
};

export default NavCrew;
