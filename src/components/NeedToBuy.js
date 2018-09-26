import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';

class NeedToBuy extends Component {
  // return items that exist in the "Need To Buy"
  renderItem(){
    let id =0;
    return this.props.buy_items.map(buy_item =>{
        return (
          <div className="card darken-1" key={++id}>
            <div className="card-content">
              <p>
                {buy_item.item}
              </p>
              <button className="right" onClick={() => this.props.addToCart(buy_item)}>
                Add to In My Cart
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

function mapStateToProps ({buy_item}){
  return {buy_item};
}

export default connect(mapStateToProps, actions) (NeedToBuy);
