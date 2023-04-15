import { ThemeProvider } from "styled-components";
import { useThemeStore } from "../../stores/themeStore";
import { mixins } from "../../styles/mixins";
import { lightTheme, darkTheme } from "../../styles/theme";

interface ThemeLayoutProps {
  children: React.ReactNode;
}

export const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  const theme = useThemeStore((state) => state.theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={{ theme: themeMode, mixins: mixins }}>
      {children}
    </ThemeProvider>
  );
};
