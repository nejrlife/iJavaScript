import { put, call } from "redux-saga/effects";
import {
  PROGRESS_SPINNER_SHOW,
  PROGRESS_SPINNER_HIDE,
  RETRIEVE_USER_DETAILS_FAILURE,
  RETRIEVE_USER_DETAILS_SUCCESS,
  RETRIEVE_USER_DETAILS_PENDING
} from "./constants";
import { getRetrieveUserDetails as getRetrieveUserDetailsApi } from "./api/getRetrieveUserDetails";

export function* watchRetrieveUserDetails(action) {
  yield put({
    type: PROGRESS_SPINNER_SHOW
  });
  yield put({
    type: RETRIEVE_USER_DETAILS_PENDING
  });
  
  try {
    const response = yield call(getRetrieveUserDetailsApi, action?.payload);
    if (!response || !response.success) {
      yield put({
        type: RETRIEVE_USER_DETAILS_FAILURE,
        payload: {
          retrieveUserDetailsError: response.message,
        },
      });
    } else {
      if (response.success === true) {
        yield put({
          type: RETRIEVE_USER_DETAILS_SUCCESS,
          payload: {
            retrieveUserDetails: response
          },
        });
      } else {
        yield put({
          type: RETRIEVE_USER_DETAILS_FAILURE,
          payload: {
            retrieveUserDetailsError: response.message,
          },
        });
      }
    }
  } catch(err) {
    yield put({
      type: RETRIEVE_USER_DETAILS_FAILURE,
      payload: {
        retrieveUserDetailsError: err.message
      }
    });
  } finally {
    yield put({
      type: PROGRESS_SPINNER_HIDE
    });
  }
}