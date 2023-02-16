import styled from "styled-components";

interface BoardContainerProps {
  sidebar: boolean;
}

export const BoardContainer = styled.div<BoardContainerProps>`
  width: 100%;
  max-width: ${({ sidebar }) => (sidebar ? "calc(100vw - 300px)" : "100vw")};
  height: calc(100vh - var(--header-h));
  padding: ${({ sidebar }) =>
    sidebar ? "24px" : "24px 24px 24px calc(48px + 24px)"};
  overflow: auto;
  background: ${({ theme }) => theme.theme.board};
`;
