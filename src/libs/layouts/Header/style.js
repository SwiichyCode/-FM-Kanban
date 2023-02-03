import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 6.4rem;
  ${({ theme }) => theme.mixins.flexBetween}
  background: ${({ theme }) => theme.theme.header};
  border-bottom: 1px solid var(--line-light);
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 750px) {
    height: 8rem;
  }

  @media screen and (min-width: 1024px) {
    height: 9.7rem;
  }

  h1 {
    font-weight: var(--font-bold);
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: var(--color-black);
    padding-left: 2.4rem;

    @media screen and (min-width: 750px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  .left-side {
    ${({ theme }) => theme.mixins.flexAlignCenter}
    gap: 1.6rem;

    .header-title {
      ${({ theme }) => theme.mixins.flexAlignCenter}
      gap: .8rem;
      cursor: pointer;

      img {
        transform: ${({ openBackdrop }) =>
          openBackdrop ? "rotate(180deg)" : "rotate(0)"};
        transition: all 200ms ease-in;
      }
    }

    @media screen and (min-width: 750px) {
      .logo-mobile,
      .logo-chevron {
        display: none;
      }

      .header-title {
        pointer-events: none;
      }
    }
  }

  .right-side {
    ${({ theme }) => theme.mixins.flexBetween}
    gap: 1.6rem;

    .board-edit {
      cursor: pointer;
    }

    @media screen and (min-width: 750px) {
      width: 100%;
      max-width: 19.2rem;
    }
  }

  .content-popover {
    ${({ theme }) => theme.mixins.flexColumn}

    font-weight: var(--font-medium);
    font-size: var(--fz-md);
    line-height: 2.3rem;
    gap: 1.6rem;

    .edit-board {
      color: var(--color-grey);
    }
    .delete-board {
      color: var(--color-red);
    }
  }

  @media screen and (min-width: 750px) {
    .icon-add {
      display: none;
    }
  }
`;
