import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import InputFields from './InputFields';

class InputForm extends Component{
  // wire up input field
  renderFields(){
    return (<Field component={InputFields} type="text" label="Please enter you item here" name="item"/>);
  }

  // show input form by "redux-form" and handle submission.
  render(){
      return(
        <div>
          <form onSubmit={this.props.handleSubmit(item=>this.props.onItemSubmit(item))}>
            {this.renderFields()}
            <button type="submit" className="red right btn-flat white-text">
              Add item to Need To Buy
              <i className="material-icons right"> add_shopping_cart </i>
            </button>
          </form>
        </div>
      );
  }

};

export default reduxForm({
  form: 'itemForm',
})(InputForm);
