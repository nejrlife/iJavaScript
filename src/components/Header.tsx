import "./Header.less";
import { FiLogOut } from "react-icons/fi"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuthenticatedClearDetails } from "../actions/auth";

const Header = (props: any) => {
  const navigate = useNavigate();

  const handleLogout = (event: any) => {
    event.preventDefault();
    props.isAuthenticatedClearDetails();
    sessionStorage.removeItem('userToken');
    navigate('/login');
  }
  return (
    <div className='headerFlex red-box'>
      <p className='js_framework'>React JS</p>
      <p className='heading'>iJavaScript</p>
      <div className='logoutFlex'>
        {props.isUserAuthenticated && <FiLogOut
          onClick={handleLogout}
          color='#FFFFFF'
        />}  
      </div>  
    </div>
  )
}
const mapStateToProps = (state:any) => ({
  isUserAuthenticated: state.authenticateUser.isUserAuthenticated
});
const mapDispatchToProps  = (dispatch:any) => ({
  isAuthenticatedClearDetails: () => dispatch(isAuthenticatedClearDetails())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);