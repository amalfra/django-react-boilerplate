import { 
  API_GET,
} from '../actions';

const INITIAL_STATE = {
  resp: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_GET: {
      return {
        ...state,
        resp: action.resp,
      };
    }
    default:
      return state;
  }
};
