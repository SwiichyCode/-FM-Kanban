import styled from "styled-components";

export const ConfirmWrapper = ({ children, status }) => {
  return <Container status={status}>{children}</Container>;
};

const Container = styled.div`
  span {
    font-weight: var(--font-medium);
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: var(--color-red);
    color: ${(props) =>
      props.status === "delete" ? "var(--color-red)" : "var(--color-grey)"};
    cursor: pointer;
  }
`;
