import * as React from "react";

import {
    Navigate,
  createBrowserRouter,
} from "react-router-dom";
import LoginComponent from "../funcionalidad/login/login.component";
import RegisterComponent from "../funcionalidad/login/register.component";
import DashboardComponent from "../funcionalidad/dashboard/dashboard.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginComponent/>
  },
  {
    path: "/register",
    element: <RegisterComponent />
  },
  {
    path: "/dashboard",
    element: <DashboardComponent />
  }
]);

export default router;