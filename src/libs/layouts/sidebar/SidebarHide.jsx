import React from "react";
import styled from "styled-components";
import IconHide from "../../../assets/icon-hide-sidebar.svg";

export const SidebarHide = ({ setOpenSidebar }) => {
  return (
    <SidebarHideContainer onClick={setOpenSidebar}>
      <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
          fill="#828FA3"
          className="icon-hide-sidebar"
        />
      </svg>
      <span>hide sidebar</span>
    </SidebarHideContainer>
  );
};

const SidebarHideContainer = styled.div`
  width: 100%;
  max-width: 23.5rem;
  ${({ theme }) => theme.mixins.flexAlignCenter}
  height: 5.2rem;
  text-transform: capitalize;
  gap: 1rem;
  border-radius: 0px 10rem 10rem 0px;
  padding-left: 3.7rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    // ???
    background: #f0effa;
    color: var(--color-purple) !important;

    .icon-hide-sidebar {
      fill: var(--color-purple);
    }

    span {
      color: var(--color-purple);
    }
  }

  span {
    font-weight: var(--font-bold);
    font-size: 1.5rem;
    height: 2rem;
    color: var(--medium-grey);
    line-height: auto;
    padding-top: 2px;
  }
`;
