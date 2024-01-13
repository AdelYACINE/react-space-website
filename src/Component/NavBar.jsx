import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="navbar navbar-desktop">
        <NavLink
          className={(NavData) =>
            `nav-link ${NavData.isActive ? "active" : ""}`
          }
          to="/"
        >
          <span className="num">00</span>Home
        </NavLink>

        <NavLink
          to="/destination"
          className={(NavData) =>
            `nav-link ${NavData.isActive ? "active" : ""}`
          }
        >
          <span className="num">01</span>Destination
        </NavLink>

        <NavLink
          to="/crew"
          className={(NavData) =>
            `nav-link ${NavData.isActive ? "active" : ""}`
          }
        >
          <span className="num">02</span>Crew
        </NavLink>

        <NavLink
          to="/technology"
          className={(NavData) =>
            `nav-link ${NavData.isActive ? "active" : ""}`
          }
        >
          <span className="num">03</span>Technology
        </NavLink>
      </div>

      {!menu && (
        <div>
          <img
            src="/images/icon-hamburger.svg"
            alt="icon-hamburger"
            className="img-fluid icon"
            onClick={() => setMenu(!menu)}
          />
        </div>
      )}

      {menu && (
        <div className=" navbar-mobile">
          <img
            src="/images/icon-close.svg"
            alt="icon-close"
            className="img-fluid icon close"
            onClick={() => setMenu(!menu)}
          />
          <NavLink
            className={(NavData) =>
              `nav-link ${NavData.isActive ? "active" : ""}`
            }
            to="/"
            onClick={() => setMenu(!menu)}
          >
            <span className="num">00</span>Home
          </NavLink>

          <NavLink
            to="/destination"
            className={(NavData) =>
              `nav-link ${NavData.isActive ? "active" : ""}`
            }
            onClick={() => setMenu(!menu)}
          >
            <span className="num">01</span>Destination
          </NavLink>

          <NavLink
            to="/crew"
            className={(NavData) =>
              `nav-link ${NavData.isActive ? "active" : ""}`
            }
            onClick={() => setMenu(!menu)}
          >
            <span className="num">02</span>Crew
          </NavLink>

          <NavLink
            to="/technology"
            className={(NavData) =>
              `nav-link ${NavData.isActive ? "active" : ""}`
            }
            onClick={() => setMenu(!menu)}
          >
            <span className="num">03</span>Technology
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavBar;
