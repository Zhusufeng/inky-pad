import { ADD_LIST, ADD_TASK } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST: {
      const { listName } = action; 
      let lists = { 
        [listName]: [] 
      };
      if (state.lists) {
        lists = Object.assign({}, state.lists, lists);
      } 
      const newState = Object.assign({}, state, { lists });
      console.log('newState: ', newState);
      return newState; 
    }
    break;

    case ADD_TASK: {
      const { task, listName } = action;
      const newArray = [...state.lists[listName], task];
      const updateAList = Object.assign({}, state.lists[listName], newArray);
      const lists = Object.assign({}, state.lists, updateAList);
      const newState = Object.assign({}, state, { lists });
      console.log('newState: ', newState);
      return newState;
    }
    break;

    default:
      return state;
  }
};

export default rootReducer;


