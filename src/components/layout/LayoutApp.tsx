import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./LayoutApp.css";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
