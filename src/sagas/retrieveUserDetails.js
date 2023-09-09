import { put, call, select, delay } from 'redux-saga/effects';
import {
  PROGRESS_SPINNER_SHOW,
  PROGRESS_SPINNER_HIDE,
  RETRIEVE_USER_DETAILS_FAILURE,
  RETRIEVE_USER_DETAILS_SUCCESS,
  RETRIEVE_USER_DETAILS_PENDING
} from './constants';
import { useSagaUtilsSingleton } from '../common/utils/sagaUtilsSingleton';
import retrieveUserDetailsMockResp from '../assets/json/retrieveUserDetails.json';

const sagaUtils = useSagaUtilsSingleton();

const MOCK_TIME_BOUND_MIN = 500;
const MOCK_TIME_BOUND_MAX = 2000;

export function* retrieveUserDetails(action) {
  yield put({
    type: PROGRESS_SPINNER_SHOW
  });
  yield put({
    type: RETRIEVE_USER_DETAILS_PENDING
  });
  const rand = sagaUtils.getRandom(MOCK_TIME_BOUND_MIN, MOCK_TIME_BOUND_MAX);
  yield delay(rand);
  const response = retrieveUserDetailsMockResp;
  if (!response || response.success !== 'true') {
    return yield put({
      type: RETRIEVE_USER_DETAILS_FAILURE,
      error: response.message,
      payload: null,
      meta: null
    });
  }
  yield put({
    type: RETRIEVE_USER_DETAILS_SUCCESS,
    payload: {
      retrieveUserDetails: response
    },
    meta: null
  });
  yield put({
    type: PROGRESS_SPINNER_HIDE
  });
}