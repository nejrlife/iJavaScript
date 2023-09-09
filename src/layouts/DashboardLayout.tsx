import { useEffect } from "react";
import {
  Outlet, useNavigate, useLocation
} from "react-router-dom";
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import './DashboardLayout.less';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/home') {
      navigate('/home/dashboard');
    }
  },[])

  const layout = (
    <>
      <Header />
      <div className='dashboardFlex'>
        <SideNavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )

  return (
    <div>{ layout }</div>
  )
}

export default DashboardLayout;