import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));
