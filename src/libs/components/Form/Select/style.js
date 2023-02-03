import styled from "styled-components";

export const CustomSelect = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: .8rem;

  label {
    font-weight: var(--font-bold);
    font-size: var(--fz-xxs);
    line-height: 1.5rem;
    color: var(--medium-grey);
  }

  .current-select {
    position: relative;
    width: 100%;
    height: 40px;
    ${({ theme }) => theme.mixins.flexBetween}
    border: ${({ open }) =>
      open ? "1px solid var(--main-purple);" : "1px solid var(--white-grey);"};
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
      color: var(--color-black);
    }
  }

  .current-items {
    width: 100%;
    ${({ theme }) => theme.mixins.flexColumn}
    background: var(--color-white);
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    border-radius: 0.8rem;
    padding: 1.6rem;

    ul {
      width: 100%;
      ${({ theme }) => theme.mixins.flexColumn}
      gap: 0.8rem;

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
