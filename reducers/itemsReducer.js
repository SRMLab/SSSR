import {
  FETCH_ITEMS,
} from '../actions/types';

const INITIAL_STATE = {
  items: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    default:
      return state;
  }
}
