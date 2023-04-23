import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: flex;
`;

export const Logo = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter}
  width: 100%;
  height: 100%;
  max-width: 20.9rem;
  border-right: ${({ theme }) => theme.theme.border};
  img {
    margin: auto;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 6.4rem;
  ${({ theme }) => theme.mixins.flexBetween}
  background: ${({ theme }) => theme.theme.header};
  border-bottom: ${({ theme }) => theme.theme.border};
  transition: all 200ms ease-in-out;
  @media screen and (min-width: 750px) {
    height: 8rem;
  }
  @media screen and (min-width: 1024px) {
    height: 9.7rem;
  }
  .left-side {
    flex: 1;
    ${({ theme }) => theme.mixins.flexAlignCenter}
    gap: 1.6rem;
    h1 {
      font-weight: var(--font-bold);
      font-size: 2.4rem;
      line-height: 2.3rem;
      color: ${({ theme }) => theme.theme.text};
      padding-left: 2.4rem;
    }
  }
  .right-side {
    ${({ theme }) => theme.mixins.flexBetween}
    gap: 1.6rem;
    @media screen and (min-width: 750px) {
      width: 19.2rem;
      /* max-width: 19.2rem; */
    }
  }
`;
