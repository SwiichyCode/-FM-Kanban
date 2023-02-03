import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";

export const EmptyBoard = () => {
  return (
    <Container>
      <p>This board is empty. Create a new column to get started.</p>
      <Button text="+ Add New Column" theme="primary" maxW={174} size="xl" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-h));
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  gap: 3.2rem;

  p {
    font-weight: var(--font-bold);
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: var(--color-grey);
  }
`;
