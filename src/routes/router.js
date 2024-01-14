import * as React from "react";

import {
    Navigate,
  createBrowserRouter,
} from "react-router-dom";
import LoginComponent from "../funcionalidad/login/login.component";
import DashboardComponent from "../funcionalidad/dashboard/dashboard.component";
import InitPage from "../funcionalidad/dashboard/pages/init.page";
import TeacherPage from "../funcionalidad/dashboard/pages/teacher.page";
import StudentPage from "../funcionalidad/dashboard/pages/student.page";
import SectionsPage from "../funcionalidad/dashboard/pages/sections.page";
import RatingsPage from "../funcionalidad/dashboard/pages/ratings.page";
import BinnaclePage from "../funcionalidad/dashboard/pages/binnacle.page";
import BackupPage from "../funcionalidad/dashboard/pages/backup.page";
import ProfilePage from "../funcionalidad/dashboard/pages/profile.page";

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
        path: "teacher",
        element: <TeacherPage/>
      },
      {
        path: "student",
        element: <StudentPage/>
      },
      {
        path: "sections",
        element: <SectionsPage/>
      },
      {
        path: "ratings",
        element: <RatingsPage/>
      },
      {
        path: "binnacle",
        element: <BinnaclePage/>
      },
      {
        path: "backup",
        element: <BackupPage/>
      },
      {
        path: "profile",
        element: <ProfilePage/>
      }
    ]
  }
]);

export default router;