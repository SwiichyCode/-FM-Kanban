import styled from "styled-components";
import { SidebarProps } from "./types";

export const SidebarContainer = styled.div<Partial<SidebarProps>>`
  position: relative;
  ${({ theme }) => theme.mixins.flexColumn}
  justify-content: space-between;
  height: 100vh;
  border-right: ${({ theme, sidebarOpen }) =>
    sidebarOpen ? theme.theme.border : "none"};
  background: ${({ theme }) => theme.theme.sidebar};
  ${({ sidebarOpen }) => (sidebarOpen ? "width: 300px" : "width: 0px")};
  min-width: ${({ sidebarOpen }) => (sidebarOpen ? "300px" : "0px")} !important;
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-300px")};
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "1" : "0")};
  padding: 3.2rem 0;
  transition: all 0.2s ease-in-out;
  user-select: none;
  @media (max-width: 1300px) {
    min-width: ${({ sidebarOpen }) =>
      sidebarOpen ? "261px" : "0px"} !important;
  }
  .sidebar-top {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 5.4rem;
  }
  .sidebar-bottom {
    width: 100%;
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 1.6rem;
  }
`;

export const SidebarShow = styled.div`
  position: absolute;
  bottom: 3.2rem;
  width: 5.6rem;
  height: 4.8rem;
  ${({ theme }) => theme.mixins.flexCenter}
  background: var(--color-purple);
  border-radius: 0px 10rem 10rem 0px;
  cursor: pointer;
`;
