import styled from "styled-components";

interface ContainerProps {
  status: "delete" | "confirm";
}

export const Container = styled.div<ContainerProps>`
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
