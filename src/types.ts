export interface AppDetails {
  progressSpinnerShow: boolean,
  authenticateUser: AuthenticateUserDetails,
  retrieveUserDetails: RetrieveUserDetails
}

export interface AuthenticateUserDetails {
  userToken: string,
  customerId: string,
  isUserAuthenticated: boolean,
  logInError: string,
  logInPending: boolean,
  isAuthenticatedError: string,
  isAuthenticatedPending: boolean
}

export interface RetrieveUserDetails {
  customer: CustomerDetails,
  retrieveUserDetailsError: string,
  retrieveUserDetailsPending: boolean
}

export interface CustomerDetails {
  id: string,
  name: string,
  last_login: string,
  balance: string,
  transaction: Transaction[]
}

export interface Transaction {
  date: string;
  desc: string;
  amount: string;
}


