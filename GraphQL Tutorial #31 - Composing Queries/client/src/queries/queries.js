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

const addBookMutation = gql`
	mutation {
		addBook(name: "", genre:"", authorId: "") {
			name
			id
		}
	}
`

export{getAuthorsQuery, getBooksQuery, addBookMutation};