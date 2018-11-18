import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import Main from './Main';

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));