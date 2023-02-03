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
  max-width: 28rem;
  ${({ theme }) => theme.mixins.flexColumn}
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: var(--borderR-md);
  padding: 2.3rem 1.6rem;
  gap: 8px;
  cursor: pointer;
  background: ${({ theme }) => theme.theme.card};

  h2 {
    font-size: var(--fz-lg);
    color: ${({ theme }) => theme.theme.text};
  }

  &:hover {
    h2 {
      color: var(--main-purple);
      transition: all 0.2s ease-in-out;
    }
  }

  p {
    font-weight: var(--font-bold);
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--color-grey);
  }
`;
