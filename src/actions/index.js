import { ADD_LIST } from '../constants';

export const addList = (name) => {
  const action = {
    type: ADD_LIST,
    name
  };
  console.log('action in addList', action);
  return action;
};