import React from 'react';

import './App.css';
import { loader } from 'graphql.macro';
import gql from 'graphql-tag';



function App() {

const query = loader('./foo.graphql');

const queryTag = gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }`

  // console.log(query.definitions[0]['selectionSet'],queryTag, 'query');
  for (const definition of query.definitions) {
    console.log(definition)
  }
  return (
    <div>
  <p>hello</p>
    </div>
  );
}

export default App;
