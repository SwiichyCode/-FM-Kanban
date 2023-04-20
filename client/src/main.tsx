import { createRoot } from "react-dom/client";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeLayout } from "./views/dashboard/layouts/ThemeLayout";
import "./styles/css/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeLayout>
    <GlobalStyle />
    <Router />
  </ThemeLayout>
);
