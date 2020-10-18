import fetch from 'isomorphic-fetch';

import {
  API_GET,
} from '.';
import config from '../../config';

export const ApiGet = (path) => dispatch =>
  fetch(`${config.API_HOST}/${path}`)
    .then(res => res.json())
    .then(res => 
      dispatch({
          type: API_GET,
          resp: res
      })
    );
