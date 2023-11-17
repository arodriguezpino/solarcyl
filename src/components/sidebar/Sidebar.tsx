import { Link } from "react-router-dom";
import "./Sidebar.css";
import CalculatorSvg from "../../assets/icons/calculator.svg";
import MapSvg from "../../assets/icons/map.svg";
import EvolutionSvg from "../../assets/icons/evolution.svg";
import NewsSvg from "../../assets/icons/news.svg";
import SunSvg from "../../assets/icons/sun.svg";

const Sidebar = () => {
  return (
    <>
      <nav className="nav__cont">
        <ul className="nav">
          <li className="nav__items">
            <div className="logo">
              <img src={SunSvg} />
            </div>
            <h4 className="title">SolarCyL</h4>
          </li>
          <li className="nav__items">
            <img src={CalculatorSvg} />
            <Link to={"calculator"}>Calculator</Link>
          </li>

          <li className="nav__items ">
            <img src={EvolutionSvg} />
            <Link to={"evolution"}>Evolution</Link>
          </li>

          <li className="nav__items ">
            <img src={MapSvg} />
            <Link to={"map"}>Map</Link>
          </li>

          <li className="nav__items ">
            <img src={NewsSvg} />
            <Link to={"news"}>News</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;