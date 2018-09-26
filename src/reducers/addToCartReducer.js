import {FETCH_CART_ITEM} from '../actions/types';

// fetch all "in my cart" data
export default function(state=[], action){
  switch(action.type){
    case FETCH_CART_ITEM:
      return action.payload;
    default:
      return state;
  }
};
