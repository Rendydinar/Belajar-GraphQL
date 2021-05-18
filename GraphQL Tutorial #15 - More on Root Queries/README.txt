Latihan Lebih Dalam Lagi Tentang Root Query-Query di GraphQL.

2 Query yang didapati dari hasil latihan:

1. Query untuk mendapatkan Daftar Buku dengan Authornya, dimana yang menjadi parent adalah Books

{
  books{
    name
    genre
    author {
      name
      age
    }
  }
}

HASIL: 

{
  "data": {
    "books": [
      {
        "name": "Name go the wind",
        "genre": "Fantasy",
        "author": {
          "name": "Patrick Rothfuss",
          "age": 44
        }
      },
      {
        "name": "The Final Empire",
        "genre": "Fantasy",
        "author": {
          "name": "Brandon Sanderson",
          "age": 42
        }
      },
      {
        "name": "The Long Earth",
        "genre": "Sci-Fi",
        "author": {
          "name": "Terry Pratchett",
          "age": 66
        }
      },
      {
        "name": "The Hero of Ages",
        "genre": "Fantasy",
        "author": {
          "name": "Brandon Sanderson",
          "age": 42
        }
      },
      {
        "name": "The Colour of Magic",
        "genre": "Fantasy",
        "author": {
          "name": "Terry Pratchett",
          "age": 66
        }
      },
      {
        "name": "The Light Fantastic",
        "genre": "Fantasy",
        "author": {
          "name": "Terry Pratchett",
          "age": 66
        }
      }
    ]
  }
}

2. Query untuk mendapatkan Author dengan Daftar Bukunya, dimana yang menjadi parent adalah Author 
{
  authors{
    name
    age
    books {
      name
      genre
    }
  }
} 

HASIL:

{
  "data": {
    "authors": [
      {
        "name": "Patrick Rothfuss",
        "age": 44,
        "books": [
          {
            "name": "Name go the wind",
            "genre": "Fantasy"
          }
        ]
      },
      {
        "name": "Brandon Sanderson",
        "age": 42,
        "books": [
          {
            "name": "The Final Empire",
            "genre": "Fantasy"
          },
          {
            "name": "The Hero of Ages",
            "genre": "Fantasy"
          }
        ]
      },
      {
        "name": "Terry Pratchett",
        "age": 66,
        "books": [
          {
            "name": "The Long Earth",
            "genre": "Sci-Fi"
          },
          {
            "name": "The Colour of Magic",
            "genre": "Fantasy"
          },
          {
            "name": "The Light Fantastic",
            "genre": "Fantasy"
          }
        ]
      }
    ]
  }
}
