import React from "react";
import styled from "styled-components";

export const LayoutMain = ({ children }) => {
  return <LayoutMainContainer>{children}</LayoutMainContainer>;
};

const LayoutMainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
