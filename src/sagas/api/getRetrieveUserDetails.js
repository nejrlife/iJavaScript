import axios from "axios";
import { call, delay } from "redux-saga/effects";
import { useSagaUtilsSingleton } from "../../common/utils/sagaUtilsSingleton";
import logInMockResp from "../../assets/json/retrieveUserDetails.json";

const sagaUtils = useSagaUtilsSingleton();
const MOCK_TIME_BOUND_MIN = 500;
const MOCK_TIME_BOUND_MAX = 2000;

export function* getRetrieveUserDetails(payload) {
  const { customerId, userToken } = payload;
  let response;
  if (false) {
    const rand = sagaUtils.getRandom(MOCK_TIME_BOUND_MIN, MOCK_TIME_BOUND_MAX);
    yield delay(rand);
    response = retrieveUserDetailsMockResp;
  } else {
    const responseData = yield call(
      axios.get,
      `http://localhost:3000/customers/${customerId}`,
      {
        headers: {
          'Authorization': userToken
        },
      }
    );
    response = responseData.data;
  }
  return response;
}