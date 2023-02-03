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
  ${({ theme }) => theme.mixins.flexColumn}
  min-width: 280px;
  gap: 24px;

  .column-header {
    ${({ theme }) => theme.mixins.flexAlignCenter}
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
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 20px;
  }
`;
