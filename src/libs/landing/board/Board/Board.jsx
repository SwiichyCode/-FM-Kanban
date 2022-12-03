import React from "react";
import styled from "styled-components";
import { EmptyBoard } from "./EmptyBoard";
import { ColumnWrapper } from "../Column/ColumnWrapper";

export const Board = ({ filteredData }) => {
  return (
    <BoardContainer>
      {filteredData.length !== 0 ? (
        filteredData.map((item, index) => (
          <ColumnWrapper item={item} key={index} />
        ))
      ) : (
        <EmptyBoard />
      )}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-h));
  padding: 24px;
`;
