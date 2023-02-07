import React from "react";
import styled from "styled-components";

interface FormWrapperProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const FormWrapper = ({ onSubmit, children }: FormWrapperProps) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

const Form = styled.form`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 2.4rem;
`;
