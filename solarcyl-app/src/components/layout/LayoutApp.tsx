import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import "./LayoutApp.css";

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};
