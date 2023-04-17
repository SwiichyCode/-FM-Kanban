import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

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
    <StyledButton
      theme={theme}
      onClick={onClick}
      type={type}
      maxW={maxW}
      size={size}
      width={width}
    >
      {text}
    </StyledButton>
  );
};
