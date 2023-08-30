import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import './App.css';
// import DashboardLayout from './layouts/DashboardLayout';

function App() {
  // const isAuthenticated = false;
  return (
    <>
      <RouterProvider router={router} />      
    </>
  )
}

export default App
