import styled from "styled-components";

export const InputGeneratorWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 12px;
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
