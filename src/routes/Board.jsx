import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../libs/components/Form/Input";

export const Board = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="Text Field (Idle)"
            placeholder="Enter task name"
            value={name}
            onchange={(e) => setName(e.target.value)}
            error={true}
          />
          <button type="submit">submit</button>
        </form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;
