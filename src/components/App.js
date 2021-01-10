import '../App.css';
import AddProductForm from './AddProductForm';
import Cart from './Cart';
import WishList from './WishList';
import { useSelector } from 'react-redux';

const App = ()=> {
  const {wishList, cart} = useSelector(state=>({...state}))

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <AddProductForm wishList={wishList} cart={cart} />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
        <WishList wishList={wishList} cart={cart}/>
        <Cart wishList={wishList} cart={cart} />
      </div>
      <div></div>
    </div>
  );
  
}

export default (App);