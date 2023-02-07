import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

interface LabelProps {
  labelText: string;
  labelFor?: string;
}

export const Label = ({ labelText, labelFor }: LabelProps) => {
  return <S.StyledLabel htmlFor={labelFor}>{labelText}</S.StyledLabel>;
};

Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelFor: PropTypes.string,
};
