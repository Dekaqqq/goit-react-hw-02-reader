import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App.jsx';

ReactDOM.render(
    <HashRouter basename="/">
        <App />
    </HashRouter>,
    document.getElementById('root'),
);
