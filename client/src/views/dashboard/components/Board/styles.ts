import styled from "styled-components";

interface BoardWrapperProps {
  sidebar: boolean;
}

export const BoardWrapper = styled.div<Partial<BoardWrapperProps>>`
  width: 100%;
  max-width: ${({ sidebar }) => (sidebar ? "calc(100vw - 300px)" : "100vw")};
  height: calc(100vh - 96px);
  padding: ${({ sidebar }) =>
    sidebar ? "24px" : "24px 24px 24px calc(48px + 24px)"};
  overflow: auto;
  background: ${({ theme }) => theme.theme.board};
`;
