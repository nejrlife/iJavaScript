import { put, delay } from 'redux-saga/effects';
import {
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAILURE,
  IS_AUTHENTICATED_PENDING,
  PROGRESS_SPINNER_SHOW,
  PROGRESS_SPINNER_HIDE
} from './constants';
import { useSagaUtilsSingleton } from '../common/utils/sagaUtilsSingleton';
import isAuthenticatedMockResp from '../assets/json/isAuthenticated.json';

const sagaUtils = useSagaUtilsSingleton();
const MOCK_TIME_BOUND_MIN = 500;
const MOCK_TIME_BOUND_MAX = 2000;

export function* isAuthenticated(action) {
  yield put({
    type: PROGRESS_SPINNER_SHOW
  });
  yield put({
    type: IS_AUTHENTICATED_PENDING,
  });
  const rand = sagaUtils.getRandom(MOCK_TIME_BOUND_MIN, MOCK_TIME_BOUND_MAX);
  yield delay(rand);
  // Call API here
  // const response = yield call();
  const response = isAuthenticatedMockResp;
  if (!response || response.status !== 200) {
    yield put({
      type: IS_AUTHENTICATED_FAILURE,
    });
  } else {
    yield put({
      type: IS_AUTHENTICATED_SUCCESS,
      payload: {
        isUserAuthenticated: response.isUserAuthenticated
      }
    });
  }
  yield put({
    type: PROGRESS_SPINNER_HIDE
  });
}