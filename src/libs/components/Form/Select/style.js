import styled from "styled-components";

export const CustomSelect = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 1.6rem;

  .current-select {
    position: relative;
    width: 100%;
    height: 40px;
    ${({ theme }) => theme.mixins.flexBetween}
    border: ${({ open }) =>
      open ? "1px solid var(--color-purple)" : "1px solid var(--color-border)"};
    border-radius: var(--borderR-lg);
    padding: 0 1.6rem;
    cursor: pointer;

    &:hover {
      border: 1px solid var(--color-purple);
    }

    span {
      font-weight: var(--font-medium);
      font-size: 1.3rem;
      line-height: 2.3rem;
      color: ${({ theme }) => theme.theme.text};
    }
  }

  .current-items {
    width: 100%;
    ${({ theme }) => theme.mixins.flexColumn}
    background: var(--color-white);
    background: ${({ theme }) => theme.theme.board};
    // create a shadow theme
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);

    border-radius: 0.8rem;
    padding: 1.6rem;

    ul {
      width: 100%;
      ${({ theme }) => theme.mixins.flexColumn}
      gap: 1rem;

      option {
        font-weight: var(--font-medium);
        font-size: 1.3rem;
        line-height: 2.3rem;
        color: var(--color-grey);
        cursor: pointer;
      }
    }
  }
`;
