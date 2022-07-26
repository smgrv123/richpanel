import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default PublicRoutes;
