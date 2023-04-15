import { Label } from "../Label";
import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({
  name,
  labelText,
  placeholder,
  defaultValue,
  onChange,
  error,
  value,
  register,
  maxW,
}: InputProps) => {
  return (
    <S.Container maxW={maxW}>
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
