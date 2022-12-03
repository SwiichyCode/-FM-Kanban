import React from "react";
import styled from "styled-components";
import { Sidebar } from "../libs/landing/sidebar/Sidebar/index";
import { Board } from "../libs/landing/board/Board/Board";
import { Header } from "../libs/landing/header/Header";
import { AppLayout } from "../layouts/AppLayout";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { boardState } from "../store/store";
import { urlSplit } from "../helpers/urlSplit";

export const App = () => {
  let { name } = useParams();
  const boardData = useRecoilValue(boardState);
  const filteredData = boardData.filter((item) => urlSplit(item.name) === name);

  return (
    <AppLayout>
      <Sidebar />
      <MainWrapper>
        <Header filteredData={filteredData} />
        <Board filteredData={filteredData} />
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
