import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loader } from 'graphql.macro';
import PersonList from './person';

function App() {

const query = loader('./foo.graphql');
console.log(query, 'query');

  return (
    <div className="App">
      <PersonList/>
    </div>
  );
}

export default App;
