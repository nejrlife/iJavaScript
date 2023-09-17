import axios from "axios";
import { call, delay } from "redux-saga/effects";
import { useSagaUtilsSingleton } from "../../common/utils/sagaUtilsSingleton";
import logInMockResp from "../../assets/json/logIn.json";

const sagaUtils = useSagaUtilsSingleton();
const MOCK_TIME_BOUND_MIN = 500;
const MOCK_TIME_BOUND_MAX = 2000;

export function* handleLogin(payload) {
  const formData = payload?.formData;
  let response;
  if (false) {
    const rand = sagaUtils.getRandom(MOCK_TIME_BOUND_MIN, MOCK_TIME_BOUND_MAX);
    yield delay(rand);
    response = logInMockResp;
  } else {
    console.log('sumthin');
    const responseData = yield call(
      axios.post,
      `http://localhost:3000/users/login`,
      {
        client_id: "iJavascript",
        user: {
          id: formData.userId,
          password: formData.password
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    response = responseData.data;
  }
  return response;
}