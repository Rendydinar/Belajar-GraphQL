const graphql = require('graphql'); // import graphql
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');

const { 
  GraphQLObjectType, 
  GraphQLString, GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql; // descturing function, untuk mengambil tipe variabel/data untuk graphql

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
 			// return _.find(authors, {id: parent.authorId})
 			return Author.findById(parent.authorId);
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
 			// return _.filter(books, {authorId: parent.id});
 			return Book.find({authorId: parent.id});
 		}
 	}
 })
});


// membuat RootQuery
// Query inilah yang akan dipanggil saat melakukan Fatch dengan GraphQL
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
				// return _.find(books, {id: args.id});
				return Book.findById(args.id);
			}
		},
		author: {
			type: AuthorType,
			args: {id: {type: GraphQLID}},
			resolve(parent, args) {
				// code to get data from db/other_source
				// return _.find(authors, {id: args.id});				
				return Author.findById(args.id);
			}
		},
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				// return books
				return Book.find({});
			}
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve(parent, args) {
				// return authors
				return Author.find({});
			}
		}
	}
});

// Mutation
const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addAuthor: { // mutation untuk menambahkan author
			type: AuthorType,
			args: {
				name: {type: new GraphQLNonNull(GraphQLString)},
				age: {type: new GraphQLNonNull(GraphQLInt)}
			},
			resolve(parent, args) {
			  let author = new Author({
			  	name: args.name,
			  	age: args.age
			  });
			  return author.save();
			}  
		},
		addBook: { // mutation untuk menambahkan data book
			type: BookType,
			args: {
				name: {type: new GraphQLNonNull(GraphQLString)}, // field tidak boleh kosong/non null 
				genre: {type: new GraphQLNonNull(GraphQLString)},
				authorId: {type: new GraphQLNonNull(GraphQLID)}
			},
			resolve(parent, args) {
				let book = new Book({
					name: args.name,
					genre: args.genre,
					authorId: args.authorId,
				});
				return book.save();
			}
		} 
	}
})

module.exports = new GraphQLSchema({ // membuat schema baru
	query: RootQuery, // query root graphQL
	mutation: Mutation // mutation graphQL
}); // import Schema 
