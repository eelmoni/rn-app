import { FIRST_ACTION } from '../actions/types';

const initialState = {};
const firstReducer = (state = initialState, action) => {
  if (action.type === FIRST_ACTION) {
    return { first: 'This is my first action! :)'};
  } else {
    return state;
  }
};

export default firstReducer;
