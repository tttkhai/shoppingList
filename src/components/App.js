import '../App.css';
import AddProductForm from './AddProductForm';
import InMyCart from './InMyCart';
import NeedToBuy from './NeedToBuy';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      listOfProduct: [],
      inMyCartProduct: [],
      needToBuyProduct: [],
      formSubmit: false
    }
  }
  handleSubmit= (values) =>{
    console.log("handleSubmit being called");
    
    const needToBuyProduct = this.state.needToBuyProduct.slice();
    needToBuyProduct.push(values);
    this.setState({
      needToBuyProduct: needToBuyProduct,
      formSubmit: !this.state.formSubmit,
    })
    console.log("needToBuyProduct: "+ JSON.stringify(this.state.needToBuyProduct));
  }

  addToCart=(value)=>{
    console.log("AddtoCart being called");
    this.state.listOfProduct.push(value);
    console.log("needToBuyProduct: "+ JSON.stringify(this.state.listOfProduct));

  }
  renderContent() {

    if(this.state.formSubmit){
      return (
        <div>
          <InMyCart inmyCart={this.state.inMyCartProduct}/>
          <NeedToBuy needToBuy={this.state.needToBuy}/>
        </div>
        
      );
    }
  }

  render() {

    return (
      <div className="App">
        <h1>Shopping Cart</h1>
        <AddProductForm listOfProduct={this.state.listOfProduct} addToCart={this.addToCart} handleSubmit={this.handleSubmit}/>
          {this.renderContent()}
        <div></div>
      </div>
    );
  }
  
}

// function mapStateToProps(state){
//   // console.log("values: "+getFormValues('addProducForm')(state));
//   return {formValues: state.form.AddProducForm};
// }

export default  (App);