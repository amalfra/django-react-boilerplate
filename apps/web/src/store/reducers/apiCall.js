import { 
  API_CALL_PENDING,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from '../actions';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  const key = `${action.verb}@${action.path}`;
  const newState = {};

  switch (action.type) {
    case API_CALL_PENDING:
      newState[key] = {
        pending: true,
      };
      return {
        ...state,
        ...newState,
      };
    case API_CALL_SUCCESS:
      newState[key] = {
        pending: false,
        resp: action.resp,
      };
      return {
        ...state,
        ...newState,
      };
    case API_CALL_FAILURE:
      newState[key] = {
        pending: false,
        error: action.error,
      };
      return {
        ...state,
        ...newState,
      };
    default:
      return state;
  }
};
