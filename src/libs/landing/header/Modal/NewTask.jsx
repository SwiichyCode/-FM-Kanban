import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";

export const NewTask = () => {
  return (
    <Container>
      <Button text="+ Add New Task" theme="primary" maxW={164} size="xl" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
