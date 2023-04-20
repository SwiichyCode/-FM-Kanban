import { Logo } from "../../../../components/Logo";
import * as S from "./styles";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
}

export const AuthCard = ({ children, title }: AuthCardProps) => {
  return (
    <S.AuthCardWrapper>
      <Logo theme="light" />
      <S.AuthCardContainer>
        <h1>{title}</h1>
        {children}
      </S.AuthCardContainer>
    </S.AuthCardWrapper>
  );
};
