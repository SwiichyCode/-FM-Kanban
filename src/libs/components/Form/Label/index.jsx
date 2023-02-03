import React from "react";
import styled from "styled-components";

export const Label = ({ labelText, labelFor }) => {
  return <StyledLabel for={labelFor}>{labelText}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-weight: var(--font-bold);
  font-size: var(--fz-lg);
  line-height: 1.5rem;
  color: var(--color-grey);
  text-transform: capitalize;
  padding-bottom: 1.1rem;
`;
