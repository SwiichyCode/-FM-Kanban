import { ThemeProvider } from "styled-components";
import { useThemeStore } from "../store/themeStore";
import { mixins } from "../styles/mixins";
import { lightTheme, darkTheme } from "../styles/theme";

export const ThemeLayout = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={{ theme: themeMode, mixins: mixins }}>
      {children}
    </ThemeProvider>
  );
};
