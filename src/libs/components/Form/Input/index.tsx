import React from "react";
import PropTypes from "prop-types";

import { Label } from "../Label";
import * as S from "./style";

interface InputProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string;
  register?: any;
}

export const Input = ({
  name,
  labelText,
  placeholder,
  defaultValue,
  onChange,
  error,
  value,
  register,
}: InputProps) => {
  return (
    <S.Container>
      {labelText && <Label labelFor={name} labelText={labelText} />}

      <S.Wrapper>
        <S.StyledInput
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          {...register}
        />
        {error && <S.Error>{error}</S.Error>}
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
