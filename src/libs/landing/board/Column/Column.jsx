import React from "react";
import styled from "styled-components";
import { ColumnTitle } from "./ColumnTitle";
import { TaskCard } from "../Task/TaskCard";

export const Column = ({ item, columns }) => {
  const { tasks } = item;

  return (
    <Container>
      <ColumnTitle title={item.name} item={item} />
      <div className="column-cards">
        {tasks.map((item, index) => {
          return <TaskCard item={item} key={index} columns={columns} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  gap: 24px;

  .column-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
