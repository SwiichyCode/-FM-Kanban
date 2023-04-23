import { MdDelete } from "react-icons/md";
import styled from "styled-components";

interface ButtonDeleteProps {
  onClick: () => void;
}

const ButtonDeleteWrapper = styled.button`
  /* font-size: 2rem; */
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
`;

export const ButtonDelete = ({ onClick }: ButtonDeleteProps) => {
  return (
    <ButtonDeleteWrapper onClick={onClick}>
      <MdDelete />
    </ButtonDeleteWrapper>
  );
};
