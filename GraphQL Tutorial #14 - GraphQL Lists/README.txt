Latihan Mencoba GraphQL Lists

QUERY GRAPHQL UNTUK MENDAPATKAN DATA DAFTAR BOOKS DARI ID AUTHOR SETELAH MENAMBAHKAN TYPE GRAPHQLLIST

{
  author(id: 2){
    name
    age
    id
    books{
      name
      genre
      id
    }
  }
}

HASIL

{
  "data": {
    "author": {
      "name": "Brandon Sanderson",
      "age": 42,
      "id": "2",
      "books": [
        {
          "name": "The Final Empire",
          "genre": "Fantasy",
          "id": "2"
        },
        {
          "name": "The Hero of Ages",
          "genre": "Fantasy",
          "id": "4"
        }
      ]
    }
  }
}