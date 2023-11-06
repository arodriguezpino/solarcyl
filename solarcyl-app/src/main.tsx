import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/LayoutApp";
import { MapPage } from "./components/pages/Map/Map.page";
import { EvolutionPage } from "./components/pages/Evolution/Evolution.page";
import { CalculatorPage } from "./components/pages/Calulator/Calculator.page";
import { NewsPage } from "./components/pages/News/News.page";
import 'leaflet/dist/leaflet.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "evolution",
        element: <EvolutionPage />,
      },
      {
        path: "calculator",
        element: <CalculatorPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
