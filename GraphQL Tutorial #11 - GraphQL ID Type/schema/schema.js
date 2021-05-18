const graphql = require('graphql'); // import graphql
const _= require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, GraphQLSchema,
  GraphQLID
} = graphql; // descturing function

// dummy data
let books = [
	{name: 'Name go the wind', genre: 'Fantasy', id: "1"},
	{name: 'The Final Empire', genre: 'Fantasy', id: "2"},
	{name: 'The Long Earth', genre: 'Sci-Fi', id: "3"}
];

// membuat type Book
const BookType = new GraphQLObjectType({
 // properti:value
 name: 'Book', // nama type
 fields: () => ({ // isi type/fields
 	id: { type: GraphQLID },  // isi id dengan type String, tapi saat melakukan query di frontend pakai integer 	
 	name: { type: GraphQLString },
 	genre: { type: GraphQLString }
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
		}
	}
});

module.exports = new GraphQLSchema({ // membuat schema baru
	query: RootQuery // query root graphQL
}); // import Schema 

// QUERY GET DATA BOOK
// {
//   book(id:"1"){
//     name
//     genre
//     id
//   }
// }