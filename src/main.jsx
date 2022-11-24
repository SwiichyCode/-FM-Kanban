import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Board } from "./routes/Board";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Board />
      </RecoilRoot>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
