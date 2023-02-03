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
  max-width: 251px;
  background: var(--light-grey-light);
  border-radius: 6px;
  margin-left: 24px;
  padding: 14px 0;
  gap: 23.67px;
`;
