import { LOG_IN } from '../sagas/constants';

export function login(username, callback) {
  return {
    type: LOG_IN,
    payload: { username },
    callback
  }
}