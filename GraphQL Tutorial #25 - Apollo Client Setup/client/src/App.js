import React, { Component } from 'react';
// import apollo client
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'; // untku mendukung penggunaan apollo pada applikasi react

// components
import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // endpoint api
});


class App extends Component {
  render() {
    return (
    	<ApolloProvider client={client}>
	      <div id="main">
	      	<h1>Ninja's Reading List</h1>
	      	<BookList />
	      </div>
	    </ApolloProvider>
    );
  }
}

export default App;
