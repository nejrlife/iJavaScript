import { put, call } from "redux-saga/effects";
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_PENDING,
  PROGRESS_SPINNER_SHOW,
  PROGRESS_SPINNER_HIDE
} from "./constants";
import { handleLogin as handleLoginApi } from "./api/handleLogIn";

export function* watchLogIn(action) {
  yield put({
    type: PROGRESS_SPINNER_SHOW
  });
  yield put({
    type: LOG_IN_PENDING,
  });
  try {
    const response = yield call(handleLoginApi, action?.payload);
    if (!response || !response.success) {
      yield put({
        type: LOG_IN_FAILURE,
        payload: {
          logInError: 'Log in service unavailable'
        }
      });
    } else {
      if (response.isUserAuthenticated === true) {
        yield put({
          type: LOG_IN_SUCCESS,
          payload: {
            isUserAuthenticated: response.isUserAuthenticated,
            customerId: response.customerId,
            userToken: response.token
          }
        });
      } else {
        yield put({
          type: LOG_IN_FAILURE,
          payload: {
            logInError: response.message
          }
        });
      }
    }
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      payload: {
        logInError: err.message
      }
    });
  } finally {
    yield put({
      type: PROGRESS_SPINNER_HIDE
    });
  }
}