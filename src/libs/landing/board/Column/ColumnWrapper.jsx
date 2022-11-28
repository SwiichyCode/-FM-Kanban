import React from "react";
import styled from "styled-components";
import { Checkbox } from "../../../components/Form/Checkbox";
import { Column } from "./Column";

export const ColumnWrapper = ({ item }) => {
  const { columns } = item;

  return (
    <Container>
      {columns.map((item, index) => {
        return <Column item={item} key={index} />;
      })}
      <Checkbox label={"test"} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
