import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Board } from "./routes/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
