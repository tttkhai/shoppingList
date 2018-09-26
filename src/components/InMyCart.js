import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InMyCart extends Component {
  // return items that exist in the "In My Cart"
  renderItem(){
    let id=0;
    return this.props.cart_item.map(cart_item =>{
        return (
          <div className="card darken-1" key={++id}>
            <div className="card-content">
              <p>
                {cart_item.item}
              </p>
              <button className="right" onClick={()=> this.props.needToBuy(cart_item)}>
                Add back to Need To Buy
              </button>
            </div>
          </div>
        );
    });
  };

  //render in the page
  render(){
    return (
      <div className="container">
        {this.renderItem()}
      </div>
    );
  };
}

function mapStateToProps ({cart_item}){
  return {cart_item};
}

export default connect(null, actions) (InMyCart);
