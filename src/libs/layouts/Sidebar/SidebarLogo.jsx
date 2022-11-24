import styled from "styled-components";
import LogoDark from "../../../assets/logo-dark.svg";

export const SidebarLogo = () => {
  return (
    <SidebarLogoContainer>
      <img src={LogoDark} />
    </SidebarLogoContainer>
  );
};

const SidebarLogoContainer = styled.div`
  img {
    padding-left: 26px;
    transition: all 200ms ease-in-out;

    @media screen and (min-width: 1024px) {
      padding-left: 34px;
    }
  }
`;
