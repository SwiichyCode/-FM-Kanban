import React from "react";
import styled from "styled-components";

export const TaskCard = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <h2>{item.title}</h2>
      <p>0 of 3 subtasks</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  background: var(--white);
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;
  padding: 23px 16px;
  gap: 8px;
  cursor: pointer;

  p {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--medium-grey);
  }
`;
