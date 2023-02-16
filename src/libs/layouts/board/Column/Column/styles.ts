import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  min-width: 28rem;
  gap: 2.4rem;

  .column-header {
    ${({ theme }) => theme.mixins.flexAlignCenter}
    gap: .8rem;
    margin-bottom: 4px;

    &__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props) => props.color};
    }
  }

  .column-cards {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 2rem;
  }
`;
