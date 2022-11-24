import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from "./routes/App";
import { GlobalStyle } from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RecoilRoot>
        <GlobalStyle />
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
