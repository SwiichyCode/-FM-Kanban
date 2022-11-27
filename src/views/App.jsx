import React from "react";
import styled from "styled-components";
import { Sidebar } from "../libs/landing/Sidebar/Sidebar";
import { Board } from "../libs/landing/board/Board";
import { Header } from "../libs/landing/header/Header";
import { AppLayout } from "../layouts/AppLayout";

export const App = () => {
  return (
    <AppLayoutContainer>
      <Sidebar />
      <MainWrapper>
        <Header />
        <Board />
      </MainWrapper>
    </AppLayoutContainer>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  /* Temporaire */
  background: var(--light-grey-light);
`;
