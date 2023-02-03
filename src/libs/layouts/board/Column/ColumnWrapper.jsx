import React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { NewColumn } from "../../modal/NewColumn";

export const ColumnWrapper = ({ item }) => {
  const { columns } = item;

  return (
    <Container>
      {columns.map((item) => {
        return <Column item={item} key={item.id} columns={columns} />;
      })}
      <NewColumn />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;
