import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import { useAuth } from "../hooks/auth";

import AppRoutes from "./app.routes";
// import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default Routes;
