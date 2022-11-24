import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ error }) =>
    error ? "1px solid #ea5555" : "1px solid rgba(130, 143, 163, 0.25)"};
  background: transparent;
  border-radius: 4px;
  padding: 8px 16px 9px 16px;
`;

export const Error = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #ea5555;
`;

export const StyledInput = styled.input`
  width: 70%;
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;

  &:focus {
    outline: none;
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
