import React from "react";
import styled from "styled-components";
import { ColumnTitle } from "./ColumnTitle";
import { TaskCard } from "../Task/TaskCard";
import { Link } from "react-router-dom";

export const Column = ({ item, columns }) => {
  const { tasks } = item;

  console.log(columns);

  return (
    <Container>
      <ColumnTitle title={item.name} item={item} />
      <div className="column-cards">
        {tasks &&
          tasks.map((item, index) => {
            return (
              <Link>
                <TaskCard item={item} key={index} columns={columns} />
              </Link>
            );
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
