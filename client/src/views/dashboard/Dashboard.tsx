import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header";
import { BoardLayout } from "./layouts/BoardLayout";
import { Board } from "./components/Board";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Sidebar />
      <BoardLayout>
        <Header />
        <Board />
      </BoardLayout>
    </DashboardWrapper>
  );
};
