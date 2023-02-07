import React from "react";
import * as S from "./styles";

interface ConfirmWrapperProps {
  status: "delete" | "confirm";
  children: React.ReactNode;
}

export const ConfirmWrapper = ({ children, status }: ConfirmWrapperProps) => {
  return <S.Container status={status}>{children}</S.Container>;
};
