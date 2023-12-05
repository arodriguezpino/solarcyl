import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/LayoutApp";
import MapPage from "./components/pages/Map/Map.page";
import EvolutionPage from "./components/pages/Evolution/Evolution.page";
import CalculatorPage from "./components/pages/Calulator/Calculator.page";
import NewsPage from "./components/pages/News/News.page";
import "bootstrap/dist/css/bootstrap.min.css";
import { Documentation } from "./components/pages/Documentation/Documentation.page";
import "./bootstrap";

const router = createHashRouter([
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
      {
        path: "documentation",
        element: <Documentation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
