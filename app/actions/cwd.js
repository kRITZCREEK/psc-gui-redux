import {REFRESH_CWD} from '../constants/ActionTypes.js';

export function refresh_cwd(s){
  return {
    type: REFRESH_CWD,
    payload: {
      path: s
    }
  };
}
