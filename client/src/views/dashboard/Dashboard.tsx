import AuthService from "../auth/services/auth.service";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar/Sidebar";

const DashboardWrapper = styled.div``;

export const Dashboard = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/signin");
  };

  return (
    <DashboardWrapper>
      <Sidebar />
      <button onClick={() => handleLogout()}>logout</button>
    </DashboardWrapper>
  );
};
