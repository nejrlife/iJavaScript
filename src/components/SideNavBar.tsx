import "./SideNavBar.less";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IS_AUTHENTICATED_CLEARDETAILS } from "../sagas/constants";
import { connect } from "react-redux";

const SideNavBar = (props: any) => {

  const {
    dispatch  
  } = props;

  const navigate = useNavigate();

  const handleLogout = (event: any) => {
    event.preventDefault();
    dispatch({
      type: IS_AUTHENTICATED_CLEARDETAILS
    });
    sessionStorage.removeItem('userToken');
    navigate('/login');
  }
  return (
    <>
      <div className='leftSider'>
        <ul>
          <nav id="sidebar">
            <li>
              <NavLink
                to="/home/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>DASHBOARD</NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="/home/about">ABOUT</NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="/home/team">TEAM</NavLink>
            </li>
            {/* <hr />
            <li>
              <a href="#" onClick={handleLogout}>LOGOUT</a>
            </li> */}
          </nav>
        </ul>
      </div>
    </>
  )
}
export default connect(null, null)(SideNavBar);