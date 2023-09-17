import DashboardLayout from "../layouts/DashboardLayout";
import Authenticating from "../pages/Authenticating";
import AuthError from "../pages/AuthError";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IS_AUTHENTICATED } from "../sagas/constants";

const ProtectedDashboard = (props: any) => {
  const [isAuth, setAuth] = useState(false);
  const [isAuthPending, setAuthPending] = useState(false);
  const [authError, setAuthError] = useState('');

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

  useEffect(() => {
    if (props.isAuthenticatedError?.length > 0) {
      setAuthError(props.isAuthenticatedError);
    }
  }, [props.isAuthenticatedError]);

  return (
    isAuthPending ?
      <Authenticating /> : (
        isAuth ?
          <DashboardLayout /> :
          <AuthError
            error={authError}/>
      )
  );
}
const mapStateToProps = (state:any) => ({
  isUserAuthenticated: state.authenticateUser.isUserAuthenticated,
  isAuthenticatedPending: state.authenticateUser.isAuthenticatedPending,
  isAuthenticatedError: state.authenticateUser.isAuthenticatedError
});
export default connect(mapStateToProps, null)(ProtectedDashboard);