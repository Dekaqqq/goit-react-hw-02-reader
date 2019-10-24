import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Reader from '../Reader/Reader.jsx';
import publications from '../../assets/publications.json';

const App = () => (
    <div>
        <Switch>
            <Route
                path="/reader"
                render={props => <Reader items={publications} {...props} />}
            />
            <Route path="/:something">
                <Redirect to="/reader" component={Reader} />
            </Route>
            <Redirect exact from="/" to="/reader" component={Reader} />
        </Switch>
    </div>
);

export default App;
