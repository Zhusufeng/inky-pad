import { ADD_LIST } from '../constants';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_LIST:
      const { listName } = action; 
      const lists = { 
        [listName]: [] 
      };
      const newState = Object.assign({}, state, { lists });      
      console.log('newState: ', newState);
      return newState; 

    default:
      return state;
  }
};

export default rootReducer;

/* Tests

// No lists inside
const state = {};
const action = {listName: 'groceries'};
const { listName } = action; 
const lists = { [listName]: [] };
const newState = Object.assign({}, state, { lists });
console.log(newState);

// Has lists
const state = { lists: {} };
const action = {listName: 'groceries'};
const { listName } = action; 
const lists = { [listName]: [] };
const newState = Object.assign({}, state, { lists });
console.log(newState);

*/


