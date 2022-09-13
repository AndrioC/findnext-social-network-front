import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { PrivateRoute } from "./private.routes";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route
      path="/home"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
