import React from "react";
import styled from "styled-components";
import IconHide from "../../../assets/icon-hide-sidebar.svg";

export const SidebarHide = ({ cycleOpen }) => {
  return (
    <SidebarHideContainer onClick={cycleOpen}>
      <img src={IconHide} alt="icon hide" />
      <span>hide sidebar</span>
    </SidebarHideContainer>
  );
};

const SidebarHideContainer = styled.div`
  width: 100%;
  max-width: 235px;
  display: flex;
  align-items: center;
  height: 48px;
  text-transform: capitalize;
  gap: 10px;
  cursor: pointer;
  margin: auto;

  span {
    font-weight: 700;
    font-size: 15px;
    height: 20px;
    color: #828fa3;
  }
`;
