import React from "react";
import styled from "styled-components";
import { boardState } from "../libs/data/store";
import { useRecoilValue } from "recoil";
import { LayoutApp } from "../libs/components/layouts/LayoutApp";

export const App = () => {
  // Get data from store
  const boardData = useRecoilValue(boardState);

  console.log(boardData);
  return (
    <LayoutApp>
      <Wrapper>Construction</Wrapper>
    </LayoutApp>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;
