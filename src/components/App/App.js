import React from 'react';
import './App.css';
import Reader from '../Reader/Reader';
import publications from '../../assets/publications.json';

function App() {
    return (
        <div>
            <Reader items={publications} />
        </div>
    );
}

export default App;
