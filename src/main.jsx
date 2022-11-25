import React from "react";
import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./routes/App";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RecoilRoot>
        <App />
      </RecoilRoot>
    ),
    children: [
      {
        path: "/:name",
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
