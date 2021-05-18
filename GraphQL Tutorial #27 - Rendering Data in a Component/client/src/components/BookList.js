import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

// query untuk mendapatkan data buku
const getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if(data.loading) { // saat loading featch data ke server graphql
      return( <div>Loading books</div>);
    } else { // sesudah loading fetch data ke server graphql
      return data.books.map(book => {
        return (    
          <li key={book.id}>{book.name}</li>
        );
      });
    }
  }
  render() {
  	console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

 