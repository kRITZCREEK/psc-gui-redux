import {REFRESH_CWD} from '../constants/ActionTypes.js';
import {cwdJS} from '../../src/Node/Process.purs';

export function refresh_cwd(){
  return {
    type: REFRESH_CWD,
    payload: {
      path: cwdJS("Not Found")()
    }
  };
}
