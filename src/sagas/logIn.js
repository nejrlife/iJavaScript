import { put, call, select, delay } from 'redux-saga/effects';
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_PENDING,
  PROGRESS_SPINNER_SHOW,
  PROGRESS_SPINNER_HIDE
} from './constants';
import { useSagaUtilsSingleton } from '../common/utils/sagaUtilsSingleton';
import logInMockResp from '../assets/json/logIn.json';

const sagaUtils = useSagaUtilsSingleton();
const MOCK_TIME_BOUND_MIN = 500;
const MOCK_TIME_BOUND_MAX = 2000;

export function* logIn(action) {
  console.log('midir!');
  console.log(action?.payload?.formData);
  yield put({
    type: PROGRESS_SPINNER_SHOW
  });
  yield put({
    type: LOG_IN_PENDING,
  });
  const rand = sagaUtils.getRandom(MOCK_TIME_BOUND_MIN, MOCK_TIME_BOUND_MAX);
  yield delay(rand);
  // Call API here
  // const response = yield call();
  const response = logInMockResp;
  if (!response || response.status !== 200) {
    yield put({
      type: LOG_IN_FAILURE
    });
  } else {
    yield put({
      type: LOG_IN_SUCCESS,
      payload: {
        isUserAuthenticated: response.isUserAuthenticated,
        customerId: response.customerId
      }
    });
  }
  yield put({
    type: PROGRESS_SPINNER_HIDE
  });
}