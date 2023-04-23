import { Button } from "../../../../components/Button";
import { EmptyBoardWrapper } from "./styles";

export const EmptyBoard = () => {
  return (
    <EmptyBoardWrapper>
      <p>This board is empty. Create a new column to get started.</p>
      <Button text="+ Add New Column" theme="primary" maxW={174} size="xl" />
    </EmptyBoardWrapper>
  );
};
