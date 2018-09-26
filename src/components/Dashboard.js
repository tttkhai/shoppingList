import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import {Link} from 'react-router-dom';

import InputFields from './InputFields';

class Dashboard extends Component{

  renderFields(){
    return (<Field component={InputFields} type="text" label="Please enter you item here" name="item"/>);
  }

  render(){
      return(
        <div>
        // need to write some more
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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
  form: 'itemForm'
})(Dashboard);
