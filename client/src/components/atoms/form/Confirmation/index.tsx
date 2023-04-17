import styled from "styled-components";

interface ConfirmationProps {
  text: string;
}

const ConfirmationWrapper = styled.span`
  color: var(--color-success);
`;

export const Confirmation = ({ text }: ConfirmationProps) => {
  return <ConfirmationWrapper>{text}</ConfirmationWrapper>;
};
