import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import "./assets/css/Fonts.css";

import FollowCursor from './components/FollowCursor';

import App from './App';

const router = createBrowserRouter([
  {
    path: "/portfolio/*",
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FollowCursor />
    <RouterProvider router={router} />
  </React.StrictMode>
);
