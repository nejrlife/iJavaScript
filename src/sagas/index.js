import { takeEvery, takeLeading  } from 'redux-saga/effects';
import * as actions from './constants';
import { logIn } from './logIn';
import { isAuthenticated } from './isAuthenticated';
import { retrieveUserDetails } from './retrieveUserDetails';


function* dataSaga() {
  yield takeLeading(actions.LOG_IN, logIn);
  yield takeLeading (actions.RETRIEVE_USER_DETAILS, retrieveUserDetails);
  yield takeLeading (actions.IS_AUTHENTICATED, isAuthenticated);
}

export default dataSaga;