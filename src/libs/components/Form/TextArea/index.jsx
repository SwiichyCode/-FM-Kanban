import React from "react";
import styled from "styled-components";
import { Label } from "../Label";

export const TextArea = ({ labelText, onChange, value }) => {
  return (
    <Container>
      <Label labelText={labelText} />
      <StyledTextArea
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
        onChange={onChange}
        value={value || ""}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  min-height: 112px;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #000112;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  resize: none;
  padding: 8px 25px 0 16px;

  &::placeholder {
    color: #000112;

    mix-blend-mode: normal;
    opacity: 0.25;
  }

  &:focus {
    outline: 1px solid var(--main-purple);
    box-shadow: 0px 0px 15px -2px #635fc7;
  }
`;
