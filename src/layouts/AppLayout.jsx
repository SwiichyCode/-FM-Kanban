import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { boardState } from "../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { urlSplit } from "../helpers/urlSplit";

export const AppLayout = ({ children }) => {
  const boardData = useRecoilValue(boardState);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && boardData.length > 0) {
      const item = urlSplit(boardData[0].name);
      navigate(`/${item}`);
    }
  }, [location, boardData]);
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

const AppLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  /* Temporaire */
  background: var(--light-grey-light);
`;
