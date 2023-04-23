import React from "react";
import styled from "styled-components";

interface BoardLayoutProps {
  children: React.ReactNode;
}

const BoardLayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoardLayout = ({ children }: BoardLayoutProps) => {
  return <BoardLayoutWrapper>{children}</BoardLayoutWrapper>;
};
