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

export{getAuthorsQuery, getBooksQuery};