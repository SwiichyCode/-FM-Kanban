import React from "react";
import styled from "styled-components";
import { Sidebar } from "../libs/landing/sidebar/Sidebar/index";
import { Board } from "../libs/landing/board/Board/Board";
import { Header } from "../libs/landing/header/Header";
import { AppLayout } from "../layouts/AppLayout";
import { useQuery } from "react-query";

export const App = () => {
  const { isLoading, error, data } = useQuery("boardData", () =>
    fetch("http://localhost:3000/board").then((res) => res.json())
  );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  console.log(data);
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
