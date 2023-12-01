import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import CalculatorSvg from "../../assets/icons/calculator.svg";
import MapSvg from "../../assets/icons/map.svg";
import EvolutionSvg from "../../assets/icons/evolution.svg";
import NewsSvg from "../../assets/icons/news.svg";
import SunSvg from "../../assets/icons/sun.svg";
import BookSvg from "../../assets/icons/book.svg";

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light fixed-sidebar"
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src={SunSvg} className="bi me-2" width="40" height="32"></img>
          <span className="fs-4">SolarCyl</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to={"calculator"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link link-dark"
              }
            >
              <img
                src={CalculatorSvg}
                className="bi me-2"
                width="16"
                height="16"
              ></img>
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"evolution"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link link-dark"
              }
            >
              <img
                src={EvolutionSvg}
                className="bi me-2"
                width="16"
                height="16"
              ></img>
              Evolution
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"map"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link link-dark"
              }
            >
              <img
                src={MapSvg}
                className="bi me-2"
                width="16"
                height="16"
              ></img>
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"news"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link link-dark"
              }
            >
              <img
                src={NewsSvg}
                className="bi me-2"
                width="16"
                height="16"
              ></img>
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"documentation"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link link-dark"
              }
            >
              <img
                src={BookSvg}
                className="bi me-2"
                width="16"
                height="16"
              ></img>
              Documentation
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default Sidebar;
