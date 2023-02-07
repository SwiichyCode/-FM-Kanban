import React from "react";
import { Label } from "../Label";
import * as S from "./styles";

interface TextAreaProps {
  labelText: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  register?: any;
}

export const TextArea = ({ labelText, onChange, register }: TextAreaProps) => {
  return (
    <S.Container>
      <Label labelText={labelText} />
      <S.StyledTextArea
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
        onChange={onChange}
        {...register}
      />
    </S.Container>
  );
};
