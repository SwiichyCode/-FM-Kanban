import React from "react";
import styled from "styled-components";

export const ColumnTitle = ({ title, item }) => {
  return (
    <Container>
      <h2>
        {title} ({item.tasks ? item.tasks.length : "0"})
      </h2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* padding-bottom: 4px; */

  h2 {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: #828fa3;
  }
`;
