import React from "react";
import styled from "styled-components";
import { Sidebar } from "../libs/layouts/sidebar/Sidebar";
import { Board } from "../libs/layouts/board/Board/Board";
import { Header } from "../libs/layouts/header/Header";
import { AppLayout } from "../layouts/AppLayout";
import { useRecoilValue } from "recoil";
import { boardState } from "../store/store";

export const App = () => {
  const data = useRecoilValue(boardState);

  // console.log(data);
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
