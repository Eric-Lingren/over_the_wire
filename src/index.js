import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()} >
        <App />
    </Router >
, document.getElementById('root'));

