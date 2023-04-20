import React from "react";
import styled from "styled-components";

interface AuthFormProps {
  children: React.ReactNode;
}

export const AuthFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const AuthFormContainer = ({ children }: AuthFormProps) => {
  return <AuthFormWrapper>{children}</AuthFormWrapper>;
};
