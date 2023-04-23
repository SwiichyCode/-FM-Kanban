import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "./views/auth/layouts/AuthLayout";
import { Signin } from "./views/auth/Signin";
import { Signup } from "./views/auth/Signup";
import { DashboardLayout } from "./views/dashboard/layouts/DashboardLayout";
import { Dashboard } from "./views/dashboard/Dashboard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
