import styled from "styled-components";
import { useThemeStore } from "../../../store/themeStore";
import logoLight from "../../../assets/logo-light.svg";
import logoDark from "../../../assets/logo-dark.svg";
export const SidebarLogo = () => {
  const theme = useThemeStore((state) => state.theme);

  console.log(theme);
  return (
    <SidebarLogoContainer>
      {theme === "light" ? (
        <img src={logoDark} alt="" loading="lazy" />
      ) : (
        <img src={logoLight} alt="" loading="lazy" />
      )}

      {/* <img src="/logo-dark.svg" alt="" /> */}
    </SidebarLogoContainer>
  );
};

const SidebarLogoContainer = styled.div`
  img {
    padding-left: 2.6rem;
    transition: all 200ms ease-in-out;

    @media screen and (min-width: 1024px) {
      padding-left: 3.4rem;
    }
  }
`;
