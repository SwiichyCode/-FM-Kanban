import React from "react";
import styled from "styled-components";
import { Sidebar } from "./libs/layouts/sidebar/Sidebar";
import { Board } from "./libs/layouts/board/Board/Board";
import { Header } from "./libs/layouts/Header";
import { AppLayout } from "./layouts/AppLayout";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeLayout } from "./layouts/ThemeLayout";

export const App = () => {
  return (
    <ThemeLayout>
      <GlobalStyle />
      <AppLayout>
        <Sidebar />
        <MainWrapper>
          <Header />
          <Board />
        </MainWrapper>
      </AppLayout>
    </ThemeLayout>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
`;
