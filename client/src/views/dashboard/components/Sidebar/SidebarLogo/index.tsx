import { useThemeStore } from "../../../../../stores/themeStore";
import { SidebarLogoContainer } from "./styles";
import logoLight from "../../../../../assets/logo-light.svg";
import logoDark from "../../../../../assets/logo-dark.svg";

export const SidebarLogo = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <SidebarLogoContainer>
      {theme === "light" ? (
        <img src={logoDark} alt="" loading="lazy" />
      ) : (
        <img src={logoLight} alt="" loading="lazy" />
      )}
    </SidebarLogoContainer>
  );
};
