import React from 'react';
import {Link} from 'react-router-dom';

// Header and 2 buttons to link to the pages
const Header = ()=>{
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right">
          <li key="1">
            <Link to="/needToBuy" className="blue btn-flat white-text">
              Need to Buy
              <i className="material-icons right">shopping_basket</i>
            </Link>
          </li>
          <li key="2">
            <Link to="/inMyCart" className="green btn-flat white-text">
              In My Cart
              <i className="material-icons right">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
