import { ADD_LIST } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST:
      const { name } = action; 
      const newState = Object.assign(state, name);
      return newState; 
    default:
      return state;
  }
};

export default rootReducer;