import * as React from "react";

import {
    Navigate,
  createBrowserRouter,
} from "react-router-dom";
import LoginComponent from "../funcionalidad/login/login.component";
import DashboardComponent from "../funcionalidad/dashboard/dashboard.component";
import InitPage from "../funcionalidad/dashboard/pages/init.page";
import TeacherPage from "../funcionalidad/dashboard/pages/teacher/teacher.page";
import StudentPage from "../funcionalidad/dashboard/pages/student.page";
import SectionsPage from "../funcionalidad/dashboard/pages/sections.page";
import RatingsPage from "../funcionalidad/dashboard/pages/ratings.page";
import BinnaclePage from "../funcionalidad/dashboard/pages/binnacle/binnacle.page";
import BackupPage from "../funcionalidad/dashboard/pages/backup.page";
import ProfilePage from "../funcionalidad/dashboard/pages/profile.page";
import LogoutPage from "../funcionalidad/dashboard/pages/logout.page";

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
    path: "/dashboard",
    element: <DashboardComponent/>,
    children: [
      {
        path: "",
        element: <InitPage/>
      },
      {
        path: "teacher", // ruta profesor
        element: <TeacherPage/>
      },
      {
        path: "student", // ruta estudiante
        element: <StudentPage/>
      },
      {
        path: "sections", // ruta sección
        element: <SectionsPage/>
      },
      {
        path: "ratings", // 
        element: <RatingsPage/>
      },
      {
        path: "binnacle", // ruta bitacora
        element: <BinnaclePage/>
      },
      {
        path: "backup", // ruta respaldo
        element: <BackupPage/>
      },
      {
        path: "profile", // ruta perfil
        element: <ProfilePage/>
      },
      {
        path: "logout",
        element: <LogoutPage />
      }
    ]
  }
]);

export default router;