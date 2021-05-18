			  GraphQL
 Server  					Client
 (NodeJS)					(React)



What is GraphQL ? 
-> GraphQL is a powerful query langgue
-> Allows for a more flexible & efficient approach than REST.

A RESTfull Approach
-> Endpoint for getting a particular book:
	domain.com/books/:id
	title, genra, reviews, authorId

-> Endpoint for getting the author info of that book:
domain.com/authors/:id
name, age biography, booksIds
-> Query to get book data and it's author data (AND the other books)

	{
		book(id: 123) {
			title
			genre
			reviews
			author {
				name
				bio
				books {
					name
				}
			}
		}
	}

Kita akan membuat GraphQL server dengan bantuan NodeJS.