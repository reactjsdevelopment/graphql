import React from "react";
import "./App.css";
import { loader } from "graphql.macro";
import gql from "graphql-tag";
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

function App() {
  const query = loader("./foo.graphql");
  const queryTag = gql`
    {
      user(id: 5) {
        firstName
        lastName
      }
    }
  `;
  var source = '{ hello }';
  // var source = '{ BoyHowdy }';

  graphql({ schema, source }).then((result) => {
    // Prints
    // {
    //   data: { hello: "world" }
    // }
    console.log(result, 'graphql');
  });
  console.log(queryTag, "loader graphql-tag");
  for (const definition of query.definitions) {
    console.log(definition, 'definition');
  }
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default App;
