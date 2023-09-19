import * as actions from "./sagas/constants";
import { AppDetails, CustomerDetails, AuthenticateUserDetails } from "./types"

const initAuthenticateUserDetailsState : AuthenticateUserDetails = {
  userToken: '',
  customerId: '',
  isUserAuthenticated: false,
  logInError: '',
  logInPending: false,
  isAuthenticatedError: '',
  isAuthenticatedPending: false
};

const initRetrieveUserDetailsCustomerState : CustomerDetails = {
  id: '',
  name: '',
  last_login: '',
  balance: '',
  transaction: []
};

const INITIAL_STATE : AppDetails = {
  progressSpinnerShow: false,
  authenticateUser: { ...initAuthenticateUserDetailsState },
  retrieveUserDetails: {
    customer: { ...initRetrieveUserDetailsCustomerState },
    retrieveUserDetailsError: '',
    retrieveUserDetailsPending: false
  }
}

export default function appReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        authenticateUser: {
          userToken: action.payload.userToken,
          isUserAuthenticated: action.payload.isUserAuthenticated,
          customerId: action.payload.customerId,
          logInError: '',
          logInPending: false
        }
      };
    case actions.LOG_IN_FAILURE:
      return {
        ...state,
        authenticateUser: {
          userToken: '',
          isUserAuthenticated: false,
          customerId: '',
          logInError: action.payload.logInError,
          logInPending: false
        }
      };
    case actions.LOG_IN_PENDING:
      return {
        ...state,
        authenticateUser: {
          ...state.authenticateUser,
          logInError: '',
          logInPending: true
        }
      };
    case actions.RETRIEVE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        retrieveUserDetails: {
          customer: { ...action.payload.retrieveUserDetails.customer },
          retrieveUserDetailsError: '',
          retrieveUserDetailsPending: false
        }
      };
    case actions.RETRIEVE_USER_DETAILS_FAILURE:
      return {
        ...state,
        retrieveUserDetails: {
          customer: { ...initRetrieveUserDetailsCustomerState },
          retrieveUserDetailsError: action.payload.retrieveUserDetailsError,
          retrieveUserDetailsPending: false
        }
      };
    case actions.RETRIEVE_USER_DETAILS_PENDING:
      return {
        ...state,
        retrieveUserDetails: {
          ...state.retrieveUserDetails,
          retrieveUserDetailsPending: true
        }
      };
    case actions.PROGRESS_SPINNER_SHOW:
      return {
        ...state,
        progressSpinnerShow: true
      };
    case actions.PROGRESS_SPINNER_HIDE:
      return {
        ...state,
        progressSpinnerShow: false
      };
    case actions.IS_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        authenticateUser: {
          customerId: action.payload.customerId,
          userToken: action.payload.userToken,
          isUserAuthenticated: true,
          isAuthenticatedError: '',
          isAuthenticatedPending: false
        }
      };
    case actions.IS_AUTHENTICATED_FAILURE:
      return {
        ...state,
        authenticateUser: {
          isUserAuthenticated: false,
          userToken: '',
          isAuthenticatedError: action.payload.isAuthenticatedError,
          isAuthenticatedPending: false
        }
      };
    case actions.IS_AUTHENTICATED_PENDING:
      return {
        ...state,
        authenticateUser: {
          ...state.authenticateUser,
          isAuthenticatedPending: true
        }
      };
    case actions.IS_AUTHENTICATED_CLEARDETAILS:
      return {
        ...state,
        authenticateUser: { ...initAuthenticateUserDetailsState }
      };
    default:
      return state;
  }
}