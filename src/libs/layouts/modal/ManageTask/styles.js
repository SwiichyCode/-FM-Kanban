import styled from "styled-components";

export const Subtasks = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  .subtasks-wrapper {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: .8rem;
  }
`;
