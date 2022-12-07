import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
    }
  }
`;
