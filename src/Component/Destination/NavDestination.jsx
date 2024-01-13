import { NavLink } from "react-router-dom";

const NavDestination = () => {
  return (
    <div className="navbar navbar-destination ">
      <NavLink
        className={(NavData) =>
          `nav-link nav-destination ${NavData.isActive ? "active" : ""}`
        }
        to="/destination/moon"
      >
        MOON
      </NavLink>

      <NavLink
        to="/destination/mars"
        className={(NavData) =>
          `nav-link nav-destination  ${NavData.isActive ? "active" : ""}`
        }
      >
        MARS
      </NavLink>

      <NavLink
        to="/destination/europa"
        className={(NavData) =>
          `nav-link nav-destination  ${NavData.isActive ? "active" : ""}`
        }
      >
        EUROPA
      </NavLink>

      <NavLink
        to="/destination/titan"
        className={(NavData) =>
          `nav-link nav-destination  ${NavData.isActive ? "active" : ""}`
        }
      >
        TITAN
      </NavLink>
    </div>
  );
};

export default NavDestination;
