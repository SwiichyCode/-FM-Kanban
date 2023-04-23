import { useNavigate, useParams } from "react-router-dom";
import { useBoardStore } from "../../../stores/boardStore";
import { ModalWrapper } from "../ModalWrapper";
import { ConfirmLayout } from "../../../layouts/COnfirmLayout";
import { Button } from "../../../../../components/Button";

interface DeleteBoardProps {
  openDelete: boolean;
  setOpenDelete: () => void;
  boardName: string;
}

export const DeleteBoard = ({
  openDelete,
  setOpenDelete,
  boardName,
}: DeleteBoardProps) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const deleteBoard = useBoardStore((state) => state.deleteBoard);

  const deleteItem = () => {
    deleteBoard(id as string);
    setOpenDelete();
    navigate("/dashboard");
  };

  return (
    <ConfirmLayout status="delete">
      <span onClick={setOpenDelete}>Delete Board</span>
      <ModalWrapper
        isOpen={openDelete}
        onRequestClose={setOpenDelete}
        // title="Delete this board?"
        selector={"#manage-board"}
        portalClassName="delete-board"
      >
        <div className="modal-header">
          <h2 className="modal-title alert">Delete this board?</h2>
        </div>
        <p className="modal-paragraph">
          Are you sure you want to delete the {boardName} board? This action
          will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="modal-box">
          <Button
            text="Delete"
            theme="destructive"
            onClick={deleteItem}
            type="button"
          />
          <Button text="Cancel" theme="secondary" onClick={setOpenDelete} />
        </div>
      </ModalWrapper>
    </ConfirmLayout>
  );
};
