import * as actions from './sagas/constants';

const initRetrieveUserDetailsCustomerState = {
  id: '',
  name: '',
  last_login: '',
  balance: '',
  transaction: []
};

const INITIAL_STATE = {
  progressSpinnerShow: false,
  authenticateUser: {
    customerId: '',
    isUserAuthenticated: false,
    logInError: '',
    logInPending: false,
    isAuthenticatedError: '',
    isAuthenticatedPending: false
  },
  retrieveUserDetails: {
    customer: { ...initRetrieveUserDetailsCustomerState },
    retrieveUserDetailsError: '',
    retrieveUserDetailsPending: false
  }
}

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        authenticateUser: {
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
          isUserAuthenticated: false,
          customerId: '',
          logInError: 'Error happened in logIn',
          logInPending: false
        }
      };
    case actions.LOG_IN_PENDING:
      return {
        ...state,
        authenticateUser: {
          ...state.authenticateUser,
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
          retrieveUserDetailsError: 'Error happened in retrieveUserDetailsError',
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
          isUserAuthenticated: action.payload.isUserAuthenticated,
          isAuthenticatedError: '',
          isAuthenticatedPending: false
        }
      };
    case actions.IS_AUTHENTICATED_FAILURE:
      return {
        ...state,
        authenticateUser: {
          isUserAuthenticated: false,
          isAuthenticatedError: 'Error happened in isAuthenticated',
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
    default:
      return state;
  }
}