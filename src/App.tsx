import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loader } from 'graphql.macro';


function App() {

const query = loader('./foo.graphql');
console.log(query, 'query');

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
