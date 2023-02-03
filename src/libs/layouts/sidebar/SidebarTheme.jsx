import React from "react";
import styled from "styled-components";
import { ToggleSwitch } from "../../components/ToggleSwitch/index";
import iconSun from "../../../assets/icon-light-theme.svg";
import iconMoon from "../../../assets/icon-dark-theme.svg";

export const SidebarTheme = () => {
  return (
    <SidebarThemeContainer>
      <img src={iconSun} alt="" />
      <ToggleSwitch />
      <img src={iconMoon} alt="" />
    </SidebarThemeContainer>
  );
};

const SidebarThemeContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  width: 100%;
  max-width: 25.1rem;
  background: var(--light-grey-light);
  border-radius: var(--borderR);
  margin-left: 2.4rem;
  padding: 1.4rem 0;
  gap: 2.36rem;
  background: ${({ theme }) => theme.theme.toggle};
`;
