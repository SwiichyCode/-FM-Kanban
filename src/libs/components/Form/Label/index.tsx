import React from "react";
import styled from "styled-components";

interface LabelProps {
  labelText: string;
  labelFor?: string;
}

export const Label = ({ labelText, labelFor }: LabelProps) => {
  return <StyledLabel htmlFor={labelFor}>{labelText}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-weight: var(--font-bold);
  font-size: var(--fz-xxs);
  line-height: 1.5rem;
  color: ${({ theme }) => theme.theme.label};
`;
