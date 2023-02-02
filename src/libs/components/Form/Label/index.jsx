import React from "react";
import styled from "styled-components";

export const Label = ({ labelText, labelFor }) => {
  return <StyledLabel for={labelFor}>{labelText}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #828fa3;
  text-transform: capitalize;
  padding-bottom: 11px;
`;
