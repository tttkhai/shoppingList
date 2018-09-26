import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right">
          <li key="1">
            <button className="blue btn-flat white-text">
              <Link to="/needToBuy"> Need to Buy
                <i className="material-icons right">shopping_basket</i>
              </Link>
            </button>
          </li>
          <li key="2">
            <button className="green btn-flat white-text">
              <Link to="/inMyCart"> In My Cart
                <i className="material-icons right">shopping_cart</i>
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
