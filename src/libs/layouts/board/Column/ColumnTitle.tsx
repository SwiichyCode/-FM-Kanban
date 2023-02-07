import React from "react";
import styled from "styled-components";

interface ColumnTitleProps {
  title: string;
  item: any;
}

export const ColumnTitle = ({ title, item }: ColumnTitleProps) => {
  return (
    <Container>
      <h2>
        {title} ({item.tasks ? item.tasks.length : "0"})
      </h2>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter}
  gap: 1.2rem;

  h2 {
    font-size: var(--fz-xxs);
    line-height: 1.5rem;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: var(--color-grey);
  }
`;
