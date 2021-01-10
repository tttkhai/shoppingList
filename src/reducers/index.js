import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { cartReducer } from './cartReducer';
import { wishlistReducer } from './wishListReducer';

export const rootReducer = combineReducers({
    form: reduxForm,
    wishList: wishlistReducer,
    cart: cartReducer
});


