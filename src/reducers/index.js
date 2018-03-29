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
      console.log('task', task);
      console.log('listName', listName);
      
      // Combines new tasks to old tasks
      const newArray = [...state.lists[listName], task];
      console.log('newArray', newArray);

      // Update state.lists[listName]
      let lists = { 
        [listName]: newArray 
      };

      // Update state.lists
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


