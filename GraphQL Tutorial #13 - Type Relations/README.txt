Mempelajari Type Relation pada Graphql

Query GraphQL setelah ditambahkan Type Relations

{
  book(id: 2){
    name
    genre
    id
    author{
      name
      age
      id
    }
  }
}

HASIL: 

{
  "data": {
    "book": {
      "name": "The Final Empire",
      "genre": "Fantasy",
      "author": {
        "name": "Brandon Sanderson",
        "age": 42,
        "id": "2"
      }
    }
  }
}