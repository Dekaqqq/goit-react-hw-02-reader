import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Reader from '../Reader/Reader.jsx';
import publications from '../../assets/publications.json';

const App = () => (
    <div>
        <Redirect
            to={{
                pathname: '/reader',
                search: '?item=1',
            }}
        />
        <Switch>
            <Route
                path="/reader"
                render={props => <Reader items={publications} {...props} />}
            />
        </Switch>
    </div>
);

export default App;
