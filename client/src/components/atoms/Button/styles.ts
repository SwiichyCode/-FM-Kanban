import styled from "styled-components";
import { ButtonProps } from "./types";

const handleColorType = (theme: "primary" | "secondary" | "destructive") => {
  switch (theme) {
    case "primary":
      return "color: var(--white); background: var(--main-purple); &:hover {background: var(--main-purple-hover)};";
    case "secondary":
      return "color: var(--main-purple); background: var(--white-grey); &:hover {background: var(--purple-grey)};";
    case "destructive":
      return "color: var(--white); background: var(--red); &:hover {background: var(--red-hover)};";
  }
};

const handleSizeType = (size: "xl" | "lg" | "md" | "sm" | any) => {
  switch (size) {
    case "xl":
      return "padding: 15px 0 14px 0; border-radius: 24px;";

    default:
      return "padding: 10px 0 11px 0; border-radius: 2rem;";
  }
};

export const StyledButton = styled.button<Partial<ButtonProps>>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  max-width: ${({ maxW }) => `${maxW}px`};
  font-weight: 700;
  font-size: var(--fz-md);
  line-height: 1.9rem;
  padding: 0.9rem;
  border: none;
  cursor: pointer;
  ${({ theme }) => handleColorType(theme)};
  ${({ size }) => handleSizeType(size)};
  transition: all 0.2s ease-in-out;
`;
