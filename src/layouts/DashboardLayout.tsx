import {
  Outlet
} from "react-router-dom";
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import style from './DashboardLayout.less';

const DashboardLayout = () => {

  const layout = (
    <>
      <Header></Header>
      <div className={style.dashboardFlex}>
      <SideNavBar></SideNavBar>
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