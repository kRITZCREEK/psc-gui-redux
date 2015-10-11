import { REFRESH_CWD } from '../constants/ActionTypes.js';

const initialState = '';

export default function cwd(state = initialState, action) {
  switch (action.type) {
  case REFRESH_CWD:
    return action.payload.path;
  default:
    return state;
  }
}
