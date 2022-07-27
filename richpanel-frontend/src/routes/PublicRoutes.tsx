import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import Plans from "../screens/plans/Plans";
import ProtectedRoutes from "./ProtectedRoutes";

function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
          <Route path="plans" element={<Plans />} />
        <Route element={<ProtectedRoutes />}>
        </Route>
      </Routes>
    </>
  );
}

export default PublicRoutes;
