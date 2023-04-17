import styled from "styled-components";
import { LabelProps } from "./types";

export const StyledLabel = styled.label<Partial<LabelProps>>`
  font-weight: var(--font-bold);
  font-size: var(--fz-xxs);
  line-height: 1.5rem;
  color: ${({ theme }) => theme.theme.label};
`;
