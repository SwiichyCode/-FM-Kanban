import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;

    svg {
      cursor: pointer;
    }

    svg:hover .icon-close {
      fill: #ea5555;
    }
  }
`;
