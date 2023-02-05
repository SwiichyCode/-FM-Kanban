import React from "react";
import styled from "styled-components";
import { Label } from "../Label";

export const TextArea = ({ labelText, onChange, value, register }) => {
  return (
    <Container>
      <Label labelText={labelText} />
      <StyledTextArea
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
        onChange={onChange}
        value={value || ""}
        {...register}
      />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 1.2rem;
`;

const StyledTextArea = styled.textarea`
  min-height: 11.2rem;
  font-weight: var(--font-medium);
  font-size: var(--fz-lg);
  line-height: 2.3rem;
  color: var(--color-black);
  color: ${({ theme }) => theme.theme.text};
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: var(--borderR-lg);
  resize: none;
  padding: 0.8rem 2.5rem 0 1.6rem;
  background: transparent;

  &::placeholder {
    color: var(--color-grey-200);
  }

  &:focus {
    outline: 1px solid var(--main-purple);
    box-shadow: 0px 0px 1.5rem -2px var(--color-purple);
  }
`;
