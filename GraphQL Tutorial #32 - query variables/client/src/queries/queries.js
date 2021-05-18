import {gql} from 'apollo-boost';


// query untuk mendapatkan data buku
const getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`

// $name: String! = variabel name, tipe string tidak boleh null
const addBookMutation = gql`
	mutation($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre:$genre, authorId: $authorId) {
			name
			id
		}
	}
`

export{getAuthorsQuery, getBooksQuery, addBookMutation};
 