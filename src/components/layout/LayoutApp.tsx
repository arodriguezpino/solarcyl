import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./LayoutApp.css";

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="wrapper">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
