import React from "react";
import styled from "styled-components";
import { TaskModal } from "../../modal/ManageTask";
import { useToggle } from "../../../../hooks/useToggle";

export const TaskCard = ({ item, columns }) => {
  const [open, setOpen] = useToggle();
  const completedSubtasks = item.subtasks.filter((item) => item.isCompleted);
  return (
    <>
      <Container onClick={setOpen}>
        <h2>{item.name}</h2>
        <p>
          {completedSubtasks.length} of {item.subtasks.length} subtasks
        </p>
      </Container>
      <TaskModal
        open={open}
        setOpen={setOpen}
        item={item}
        completedSubtasks={completedSubtasks}
        columns={columns}
      />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  ${({ theme }) => theme.mixins.flexColumn}
  background: var(--white);
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;
  padding: 23px 16px;
  gap: 8px;
  cursor: pointer;

  &:hover {
    h2 {
      color: var(--main-purple);
      transition: all 0.2s ease-in-out;
    }
  }

  p {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--medium-grey);
  }
`;
