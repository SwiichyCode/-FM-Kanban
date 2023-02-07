import styled from "styled-components";

export const StyledLabel = styled.label`
  font-weight: var(--font-bold);
  font-size: var(--fz-xxs);
  line-height: 1.5rem;
  color: ${({ theme }) => theme.theme.label};
`;
