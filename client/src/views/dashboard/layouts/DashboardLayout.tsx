import { Outlet } from "react-router-dom";
import { ProtectedLayout } from "./ProtectedLayout";
import styled from "styled-components";

const DashboardLayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const DashboardLayout = () => {
  return (
    <DashboardLayoutWrapper>
      <ProtectedLayout>
        <Outlet />
      </ProtectedLayout>
    </DashboardLayoutWrapper>
  );
};
