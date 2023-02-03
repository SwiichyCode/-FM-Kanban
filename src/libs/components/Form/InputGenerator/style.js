import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      cursor: pointer;
    }
  }

  svg:hover.icon-close {
    fill: #ea5555;
  }
`;
