import { ADD_LIST } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST:
      const { listName } = action; 
      let newState = {};
      let lists = { 
        [listName]: [] 
      };

      if (!state.lists) {
        newState = Object.assign({}, state, { lists });
      } else {
        lists = Object.assign({}, state.lists, lists);
        newState = Object.assign({}, state, { lists });
      }  
      console.log('newState: ', newState);
      return newState; 

    default:
      return state;
  }
};

export default rootReducer;


