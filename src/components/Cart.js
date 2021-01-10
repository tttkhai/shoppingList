import { useDispatch } from "react-redux";

const Cart =({wishList, cart})=> {
    let dispatch=useDispatch();
    const moveToWishList = (product, index)=> {
        wishList.push(product);
        cart.splice(index,1);

        dispatch({
          type: 'ADD_TO_WISHLIST',
          payload: wishList
        });
        
        dispatch({
            type: 'ADD_TO_CART',
            payload: cart
        });
    }

    return (
        <div className="app-block">
            <div>Cart</div>
            <ul>
                {cart.map((product, index)=>{
                return <li key={index}><span>{product}</span> <button onClick={()=>{moveToWishList(product, index)}}> Move To Wish List</button></li> 
            })}
            </ul>
        </div>
    );
}

export default Cart;