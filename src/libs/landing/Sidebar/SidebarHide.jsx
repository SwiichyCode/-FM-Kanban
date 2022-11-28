import React from "react";
import styled from "styled-components";
import IconHide from "../../../assets/icon-hide-sidebar.svg";

export const SidebarHide = ({ setOpenSidebar }) => {
  return (
    <SidebarHideContainer onClick={setOpenSidebar}>
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
    font-size: 1.5rem;
    height: 20px;
    color: var(--medium-grey);
  }
`;
