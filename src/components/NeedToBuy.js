import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';

class NeedToBuy extends Component {
  render(){
    // xem lai phan tai sao lai co _id
    return this.props.items.map(({_id, item}) =>{
        return (
          <div className="card darken-1" key={_id}>
            <div className="card-content">
              <p>
                {item}
              </p>
              // write a function to handle the state
              <button className="right">
                Add to In My Cart
              </button>
            </div>
          </div>
        );
    });
  };
}

export default connect(null, actions)(NeedToBuy);
