import { ThemeProvider } from "styled-components";
import { mixins } from "../styles/mixins";

const theme = {
  mixins,
};

export const ThemeLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
