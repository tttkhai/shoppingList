import {FETCH_BUY_ITEM} from './types';
import {FETCH_CART_ITEM} from './types';

// action to handle input submission
export const submitInput = (item) => async dispatch =>{
  dispatch({type: FETCH_BUY_ITEM, payload: item});
};

// action to handle when users want to move an item from "Add To Cart" to "Need To Buy"
export const needToBuy = (item) => async dispatch =>{
  dispatch({ type: FETCH_BUY_ITEM, payload: item });
}

// action to handle when users want to move an item from "Need To Buy" to "Add To Cart"
export const addToCart= (item) => async dispatch =>{
  dispatch({ type: FETCH_CART_ITEM, payload: item });
}
