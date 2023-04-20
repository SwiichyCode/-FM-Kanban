import styled from "styled-components";

export const AuthCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.2rem;
`;

export const AuthCardContainer = styled.div`
  width: 40rem;
  background: var(--color-white);
  border-radius: var(--borderR-xl);
  padding: 3.2rem;

  h1 {
    font-size: var(--fz-xxxl);
    line-height: 4rem;
    letter-spacing: -0.5px;
    margin-bottom: 4rem;
  }
`;
