import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./LayoutApp.css";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("calculator");
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
