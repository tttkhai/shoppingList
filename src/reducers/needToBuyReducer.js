import {FETCH_BUY_ITEM} from '../actions/types';

// fetch all "Need To Buy" data
export default function(state=[], action){
  switch(action.type){
    case FETCH_BUY_ITEM:
      return action.payload;
    default:
      return state;
  }
};
