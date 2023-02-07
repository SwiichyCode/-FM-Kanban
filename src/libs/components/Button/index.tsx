import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

interface ButtonProps {
  theme: "primary" | "secondary" | "destructive";
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  maxW?: number;
  size?: string;
  width?: number;
}

export const Button = ({
  theme,
  text,
  type,
  onClick,
  maxW,
  size,
  width,
}: ButtonProps) => {
  return (
    <S.StyledButton
      theme={theme}
      onClick={onClick}
      type={type}
      maxW={maxW}
      size={size}
      width={width}
    >
      {text}
    </S.StyledButton>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary", "destructive"]).isRequired,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  onClick: PropTypes.func,
  maxW: PropTypes.number,
  width: PropTypes.number,
};
