import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import useDashboardStore from "../store/dashboardStore";

export const AppLayout = ({ children }) => {
  const board = useDashboardStore((state) => state.dashboard);
  const location = useLocation();
  let navigate = useNavigate();

  // Redirect to the 1st board of the list
  useEffect(() => {
    if (location.pathname === "/" && board.length > 0) {
      const item = board[0].id;
      navigate(`/${item}`);
    } else {
      navigate("/");
    }
  }, [location, board]);

  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

const AppLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  /* Temporaire */
  background: ${({ theme }) => theme.theme.board};
`;
