import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import useDashboardStore from "../store/dashboardStore";

export const AppLayout = ({ children }) => {
  const board = useDashboardStore((state) => state.dashboard);
  const location = useLocation();
  const [dataLoaded, setDataLoaded] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setDataLoaded(true);
  }, [board]);

  // Redirect to the 1st board of the list
  useEffect(() => {
    if (location.pathname === "/" && board.length > 0 && dataLoaded) {
      const item = board[0].id;
      navigate(`/${item}`);
    }
  }, [location, board, dataLoaded]);

  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

const AppLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  /* Temporaire */
  background: ${({ theme }) => theme.theme.board};
`;
