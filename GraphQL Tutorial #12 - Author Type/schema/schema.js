const graphql = require('graphql'); // import graphql
const _= require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql; // descturing function, untuk mengambil tipe variabel/data untuk graphql

// dummy data for book
let books = [
	{name: 'Name go the wind', genre: 'Fantasy', id: '1'},
	{name: 'The Final Empire', genre: 'Fantasy', id: '2'},
	{name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
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
 	genre: { type: GraphQLString }
 })
});

// membuat type Author
const AuthorType = new GraphQLObjectType({
 // properti:value
 name: 'Author', // nama type
 fields: () => ({ // isi type/fields
 	id: { type: GraphQLID },  // isi id dengan type String 	
 	name: { type: GraphQLString },
 	age: { type: GraphQLInt }
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