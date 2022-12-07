import React from "react";
import styled from "styled-components";

export const NewColumn = () => {
  return <Container>+ New Column</Container>;
};

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  height: calc(100vh - var(--header-h) - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #e9effa 0%,
    rgba(233, 239, 250, 0.5) 100%
  );
  border-radius: 6px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #828fa3;
  cursor: pointer;
`;
