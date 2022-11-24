import styled from "styled-components";

export const LayoutApp = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
