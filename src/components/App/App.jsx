import React from 'react';
import './App.css';
import Reader from '../Reader/Reader.jsx';
import publications from '../../assets/publications.json';

const App = () => (
    <div>
        <Reader items={publications} />
    </div>
);

export default App;
