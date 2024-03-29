import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./assets/css/App.css";
import "typeface-poppins";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
