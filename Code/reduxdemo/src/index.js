import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './counter'
import {createStore} from 'redux'
import {reducer} from './counter/ReduxReducer'

let store = createStore(reducer);

ReactDOM.render(<Counter store={store} />, document.getElementById('root'));