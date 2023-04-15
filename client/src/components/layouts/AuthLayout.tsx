import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AuthLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fd;
`;

export const AuthLayout = () => {
  return (
    <AuthLayoutWrapper>
      <main>
        <Outlet />
      </main>
    </AuthLayoutWrapper>
  );
};
