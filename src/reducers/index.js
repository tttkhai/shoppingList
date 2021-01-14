import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { wishlistReducer } from './wishListReducer';

export const rootReducer = combineReducers({
    wishList: wishlistReducer,
    cart: cartReducer
});


