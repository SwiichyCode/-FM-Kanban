import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #f4f7fd;
  border-radius: 4px;
  padding: 0 12px;
  gap: 16px;

  input {
    width: 16px;
    height: 16px;
  }
  input[type="checkbox"] {
    accent-color: var(--main-purple);
  }

  label {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: ${({ checked }) =>
      checked ? "line-through" : "default"};
    color: #000112;
    mix-blend-mode: normal;
    opacity: 0.5;
    transition: all 200ms ease-in-out;
  }
`;
