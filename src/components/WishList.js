import { useDispatch } from 'react-redux';

const WishList=({wishList, cart})=> {
    let dispatch = useDispatch();
    const addToCart = (product, index)=> {
        cart.push(product);
        wishList.splice(index,1);

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
            <div>Wish List</div>
            <ul> {wishList.map((product, index)=>{
                return <li key={index}>
                     <span>{product}</span> <button onClick={()=>addToCart(product, index)}>Add To Cart</button>
                </li>
                })}
            </ul>
        </div>
    );
}

export default WishList;