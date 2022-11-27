import React from "react";
import styled from "styled-components";
import { Sidebar } from "../libs/landing/Sidebar/Sidebar";
import { Board } from "../libs/landing/board/Board";
import { Header } from "../libs/landing/header/Header";

export const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <MainWrapper>
        <Header />
        <Board />
      </MainWrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  /* Temporaire */
  background: var(--light-grey-light);
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
