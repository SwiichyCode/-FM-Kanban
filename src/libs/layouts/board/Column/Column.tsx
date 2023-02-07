import React from "react";
import styled from "styled-components";
import { ColumnTitle } from "./ColumnTitle";
import { TaskCard } from "../Task/TaskCard";

interface ColumnProps {
  item: any;
  columns: any;
}

export const Column = ({ item, columns }: ColumnProps) => {
  const { tasks } = item;

  return (
    <Container color={item.color}>
      <div className="column-header">
        <ColumnTitle title={item.name} item={item} />
        <div className="column-header__dot"></div>
      </div>
      <div className="column-cards">
        {tasks &&
          tasks.map((item: any, index: any) => {
            return <TaskCard item={item} key={index} columns={columns} />;
          })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  min-width: 28rem;
  gap: 2.4rem;

  .column-header {
    ${({ theme }) => theme.mixins.flexAlignCenter}
    gap: .8rem;
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
    gap: 2rem;
  }
`;
