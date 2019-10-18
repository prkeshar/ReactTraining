import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'));

serviceWorker.unregister();
