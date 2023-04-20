import { useState } from "react";
import { Label } from "../../../../components/Label";
import { InputProps } from "./types";
import * as S from "./styles";

export const InputPassword = ({
  name,
  labelText,
  placeholder,
  defaultValue,
  onChange,
  error,
  value,
  register,
  maxW,
  required,
}: InputProps) => {
  const [activePassword, setActivePassword] = useState(false);
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
          type={activePassword ? "text" : "password"}
          {...register?.(name as string, { required: required })}
        />

        <S.ShowPassword
          as={"span"}
          onClick={() => setActivePassword(!activePassword)}
        >
          Show
        </S.ShowPassword>
      </S.Wrapper>
    </S.Container>
  );
};
