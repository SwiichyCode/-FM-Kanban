import React from "react";
import styled from "styled-components";
import { Sidebar } from "../libs/landing/sidebar/Sidebar/index";
import { Board } from "../libs/landing/board/Board";
import { Header } from "../libs/landing/header/Header";
import { AppLayout } from "../layouts/AppLayout";

export const App = () => {
  return (
    <AppLayout>
      <Sidebar />
      <MainWrapper>
        <Header />
        <Board />
      </MainWrapper>
    </AppLayout>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
