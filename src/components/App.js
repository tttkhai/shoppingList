import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import InMyCart from './InMyCart';
import NeedToBuy from './NeedToBuy';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/inMyCart" component={InMyCart}/>
          <Route exact path="/needToBuy" component={NeedToBuy}/>
        </div>
      </BrowserRouter>
    );
  };

}

export default App;
