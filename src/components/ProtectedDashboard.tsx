import DashboardLayout from "../layouts/DashboardLayout";
import Authenticating from "../pages/Authenticating";
import ErrorPage from "../pages/ErrorPage";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IS_AUTHENTICATED } from "../sagas/constants";

const ProtectedDashboard = (props: any) => {
  const [isAuth, setAuth] = useState(false);
  const [isAuthPending, setAuthPending] = useState(false);

  const {
    dispatch  
  } = props;
  
  useEffect(() => {
    setAuth(props.isUserAuthenticated);
    const token = sessionStorage.getItem('userToken');
    if (props.isUserAuthenticated === false && token && token?.length > 0) {
      dispatch({
        type: IS_AUTHENTICATED,
        payload: {
          userToken: token
        }
      });
    }
  }, [dispatch, props.isUserAuthenticated])

  useEffect(() => {
    setAuthPending(props.isAuthenticatedPending);
  }, [props.isAuthenticatedPending]);

  return (
    isAuthPending ?
      <Authenticating /> : (
        isAuth ?
          <DashboardLayout /> :
          <ErrorPage
            error='Your user session expired.'/>
      )
  );
}
const mapStateToProps = (state:any) => ({
  isUserAuthenticated: state.authenticateUser.isUserAuthenticated,
  isAuthenticatedPending: state.authenticateUser.isAuthenticatedPending,
  isAuthenticatedError: state.authenticateUser.isAuthenticatedError
});
export default connect(mapStateToProps, null)(ProtectedDashboard);