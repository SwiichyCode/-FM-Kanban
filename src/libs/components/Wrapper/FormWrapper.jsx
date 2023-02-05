import React from "react";
import styled from "styled-components";

export const FormWrapper = ({ onSubmit, children }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

const Form = styled.form`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 2.4rem;
`;
