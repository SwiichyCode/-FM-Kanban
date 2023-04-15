import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeLayout } from "./components/layouts/ThemeLayout";
import "./styles/css/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeLayout>
    <GlobalStyle />
    <App />
  </ThemeLayout>
);
