import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateStudent from "./pages/CreateStudent.tsx";
import EditStudent from "./pages/EditStudent.tsx";
import Students from "./pages/Students.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Students />,
      },
      {
        path: "create",
        element: <CreateStudent />,
      },
      {
        path: "student/:id",
        element: <EditStudent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
