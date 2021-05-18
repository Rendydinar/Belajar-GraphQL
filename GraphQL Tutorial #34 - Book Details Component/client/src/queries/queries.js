import {gql} from 'apollo-boost';


// query untuk mendapatkan data daftar buku
const getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`

// query untuk mendapatkan data author
const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`

// query untuk mutation tambah buku
// $name: String! = variabel name, tipe string tidak boleh null
const addBookMutation = gql`
	mutation($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre:$genre, authorId: $authorId) {
			name
			id
		}
	}
`

// query untuk mendapatkan 1 data buku
const getBookQuery = gql`
  query($id: ID) {
  	book(id: $id) {
  	  id
  	  name
  	  genre
  	  author {
  	  	id
  	  	name
  	  	age
  	  	books {
  	  	  name
  	  	  id
  	  	}
   	  }
  	}
  }
`

export{getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};
 