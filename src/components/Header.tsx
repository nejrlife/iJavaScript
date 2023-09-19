import "./Header.less";
import { FiLogOut } from "react-icons/fi"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IS_AUTHENTICATED_CLEARDETAILS } from "../sagas/constants";

const Header = (props: any) => {
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
    <div className='headerFlex'>
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
export default connect(mapStateToProps, null)(Header);