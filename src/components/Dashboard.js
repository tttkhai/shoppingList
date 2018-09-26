import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions';
import InputForm from './InputForm';

class Dashboard extends Component{
  state = {
    itemList: []
  }

// handle input submission
  onItemSubmit=(item)=>{
    const itemList = this.state.itemList;
    // check if item is already in the list
    if(itemList.includes(item)){
      alert('You already had this item in cart');
    }
    // concat item to array list then handle input submission
    else {
      this.setState({
        itemList: [...this.state.itemList, item],
      });
      this.props.submitInput(itemList);
    }
  }

  // render Input Form
  render(){
    return(
      <div>
        <InputForm onItemSubmit={(item)=> this.onItemSubmit(item)}/>
      </div>
    );
  }
};

export default connect(null, actions) (Dashboard);
