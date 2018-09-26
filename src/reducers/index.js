import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import addToCartReducer from './addToCartReducer';
import needToBuyReducer from './needToBuyReducer';

export default combineReducers({
  buy_item: needToBuyReducer,
  cart_item: addToCartReducer,
  form: reduxForm,
});
