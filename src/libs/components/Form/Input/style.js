import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "initial")};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ error }) =>
    error ? "1px solid #ea5555" : "1px solid rgba(130, 143, 163, 0.25)"};
  background: transparent;
  border-radius: 4px;
`;

export const Error = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #ea5555;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  padding: 8px 16px 9px 16px;
  border-radius: 4px;

  &:focus {
    outline: 1px solid var(--main-purple);
    box-shadow: 0px 0px 15px -2px #635fc7;
  }

  &::placeholder {
    color: #bfbfc3;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #828fa3;
  text-transform: capitalize;
`;
