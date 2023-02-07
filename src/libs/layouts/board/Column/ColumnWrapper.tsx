import React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { NewColumn } from "../../modal/NewColumn";

interface ColumnWrapperProps {
  item: any;
}

export const ColumnWrapper = ({ item }: ColumnWrapperProps) => {
  const { columns } = item;

  return (
    <Container>
      {columns.map((item: any) => {
        return <Column item={item} key={item.id} columns={columns} />;
      })}
      <NewColumn />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: max-content;
  gap: 2.4rem;
  padding-top: 0.4rem;
`;
