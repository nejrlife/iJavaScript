import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import ProtectedDashboard from "../components/ProtectedDashboard";
import Login from "../pages/Login";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />
  },
  {
    path: "/home",
    element: <ProtectedDashboard />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "team",
        element: <Team />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <ErrorPage error='404 Page not found'/>
  },
]);


export default router;