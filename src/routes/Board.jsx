import React from "react";
import styled from "styled-components";
import { boardState } from "../libs/data/store";
import { useRecoilValue } from "recoil";

export const Board = () => {
  // Get data from store
  const boardData = useRecoilValue(boardState);

  console.log(boardData);
  return (
    <Container>
      <Wrapper>Construction</Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;
