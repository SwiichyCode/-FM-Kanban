import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import { Label } from "../Label";

export const Input = ({
  name,
  labelText,
  placeholder,
  value,
  onChange,
  error,
  maxW,
}) => {
  return (
    <S.Container maxW={maxW}>
      {labelText && <Label for={name} labelText={labelText} />}
      <S.Wrapper error={error}>
        <S.StyledInput
          name={name}
          type="text"
          placeholder={placeholder}
          value={value || ""}
          onChange={onChange}
        ></S.StyledInput>
        {error && <S.Error>Can't be empty</S.Error>}
      </S.Wrapper>
    </S.Container>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};
