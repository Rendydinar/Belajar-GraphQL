const graphql = require('graphql'); // import graphql
const _= require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql; // descturing function, untuk mengambil tipe variabel/data untuk graphql

// dummy data for book
let books = [
	{name: 'Name go the wind', genre: 'Fantasy', id: '1', authorid: '1'},
	{name: 'The Final Empire', genre: 'Fantasy', id: '2', authorid: '2'},
	{name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorid: '3'},
	{name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorid: '2'},
	{name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorid: '3'},
	{name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorid: '3'}
];

// dummy data for author
let authors = [
	{name: 'Patrick Rothfuss', age: 44, id: '1'},
	{name: 'Brandon Sanderson', age: 42, id: '2'},
	{name: 'Terry Pratchett', age: 66, id: '3'}
];

// membuat type Book
const BookType = new GraphQLObjectType({
 // properti:value
 name: 'Book', // nama type
 fields: () => ({ // isi type/fields
 	id: { type: GraphQLID },  // isi id dengan type String 	
 	name: { type: GraphQLString },
 	genre: { type: GraphQLString },
 	author: {  
 		type: AuthorType, // relation to author type
 		resolve(parent, args) {
 			// object parent adalah type yang dahulu dipanggil, dalam hal ini object parent = BookType
 			console.log(parent);
 			return _.find(authors, {id: parent.authorid})
 		}
 	}
 })
});

// membuat type Author
const AuthorType = new GraphQLObjectType({
 // properti:value
 name: 'Author', // nama type
 fields: () => ({ // isi type/fields
 	id: { type: GraphQLID },  // isi id dengan type String 	
 	name: { type: GraphQLString },
 	age: { type: GraphQLInt },
 	books: {
 		type: new GraphQLList(BookType), // type GraphQL List untuk menampung daftar buku/BookType
 		resolve(parent, args) {
 			return _.filter(books, {authorid: parent.id});
 		}
 	}
 })
});


// membuat RootQuery
const RootQuery = new GraphQLObjectType({
	name:'RootQueryType',
	fields: 	{
		book: {
			type: BookType, // tipenya BookType
			args: { id: { type: GraphQLID }},
			resolve(parent, args) {
				// args = argumen yang dilempar 
				// code to get data from db/other_source
				console.log(args.id);
				return _.find(books, {id: args.id});
			}
		},
		author: {
			type: AuthorType,
			args: {id: {type: GraphQLID}},
			resolve(parent, args) {
				// code to get data from db/other_source
				return _.find(authors, {id: args.id});				
			}
		}
	}
});

module.exports = new GraphQLSchema({ // membuat schema baru
	query: RootQuery // query root graphQL
}); // import Schema 

// QUERY UNTUK GET DATA BOOK
// {
//   book(id:1){
//     name
//     genre
//     id
//   }
// }

// QUERY UNTUK GET DATA AUTHOR
// {
//   author(id:5){
//     name
//     age
//     id
//   }
// }