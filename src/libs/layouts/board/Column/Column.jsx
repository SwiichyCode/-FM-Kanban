import React from "react";
import styled from "styled-components";
import { ColumnTitle } from "./ColumnTitle";
import { TaskCard } from "../Task/TaskCard";

export const Column = ({ item, columns }) => {
  const { tasks } = item;

  return (
    <Container color={item.color}>
      <div className="column-header">
        <ColumnTitle title={item.name} item={item} />
        <div className="column-header__dot"></div>
      </div>
      <div className="column-cards">
        {tasks &&
          tasks.map((item, index) => {
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

  .column-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;

    &__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props) => props.color};
    }
  }

  .column-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
