import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}

  .input-container {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 12px;
  }

  .input-wrapper {
    ${({ theme }) => theme.mixins.flexBetween}

    svg {
      cursor: pointer;
    }
  }

  svg:hover.icon-close {
    fill: var(--color-red);
  }
`;
