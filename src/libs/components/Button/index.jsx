import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ theme, text, type, onClick }) => {
  return (
    <StyledButton theme={theme} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

const handleColorType = (theme) => {
  switch (theme) {
    case "primary":
      return "color: var(--white); background: var(--main-purple); &:hover {background: var(--main-purple-hover)};";
    case "secondary":
      return "color: var(--main-purple); background: var(--white-grey); &:hover {background: var(--purple-grey)};";
    case "destructive":
      return "color: var(--white); background: var(--red); &:hover {background: var(--red-hover)};";
  }
};

const StyledButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2.3rem;
  padding: 0.9rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  ${({ theme }) => handleColorType(theme)};
`;

Button.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary", "destructive"]).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
