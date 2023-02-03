import styled from "styled-components";

export const SidebarLogo = () => {
  return (
    <SidebarLogoContainer>
      <img src="/logo-dark.svg" alt="" />
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
