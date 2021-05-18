import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

// componets
import BookDetails from './BookDetails'; 

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  displayBooks() {
    let data = this.props.data;
    if(data.loading) { // saat loading featch data ke server graphql
      return( <div>Loading books</div>);
    } else { // sesudah loading fetch data ke server graphql
      return data.books.map(book => {
        return (    
          <li key={book.id} onClick={(e) => {this.setState({selected: book.id})}}>{book.name}</li>
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
        <BookDetails bookid={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

 