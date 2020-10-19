import fetch from 'isomorphic-fetch';

import {
  API_CALL_PENDING,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from '.';
import config from '../../config';

function apiCallPending(path, verb) {
  return {
    type: API_CALL_PENDING,
    path,
    verb,
  };
}

function apiCallSuccess(path, verb, resp) {
  return {
    type: API_CALL_SUCCESS,
    path,
    verb,
    resp,
  };
}

function apiCallFailure(path, verb, error) {
  return {
    type: API_CALL_FAILURE,
    path,
    verb,
    error,
  };
}

export const ApiCall = (path, type = 'GET') => dispatch => {
  dispatch(apiCallPending(path, type));

  return fetch(`${config.API_HOST}/${path}`, {
    method: type,
  })
    .then(res => res.json())
    .then(res => dispatch(apiCallSuccess(path, type, res)))
    .catch(error => {
      dispatch(apiCallFailure(path, type, error));
    });
};
