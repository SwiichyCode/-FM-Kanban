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
  type,
  required,
}: InputProps) => {
  return (
    <S.Container maxW={maxW}>
      <S.LabelWrapper>
        {labelText && <Label labelFor={name} labelText={labelText} />}
        {error && <S.Error>{error}</S.Error>}
      </S.LabelWrapper>
      <S.Wrapper>
        <S.StyledInput
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          type={type}
          {...register?.(name as string, { required: required })}
        />
      </S.Wrapper>
    </S.Container>
  );
};
