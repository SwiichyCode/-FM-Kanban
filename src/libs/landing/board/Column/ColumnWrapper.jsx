import React from "react";
import styled from "styled-components";
import { Column } from "./Column";

export const ColumnWrapper = ({ item }) => {
  const { columns } = item;

  return (
    <Container>
      {columns.map((item, index) => {
        return <Column item={item} key={index} columns={columns} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
