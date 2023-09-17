import { takeLeading } from "redux-saga/effects";
import * as actions from "./constants";
import { watchLogIn } from "./watchLogIn";
import { watchIsAuthenticated } from "./watchIsAuthenticated";
import { watchRetrieveUserDetails } from "./watchRetrieveUserDetails";


function* dataSaga() {
  yield takeLeading(actions.LOG_IN, watchLogIn);
  yield takeLeading (actions.RETRIEVE_USER_DETAILS, watchRetrieveUserDetails);
  yield takeLeading (actions.IS_AUTHENTICATED, watchIsAuthenticated);
}

export default dataSaga;