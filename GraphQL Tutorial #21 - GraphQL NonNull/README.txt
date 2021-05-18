Kita akan mempelajari NonNull pada GraphQL.


Ini berfungsi agar tidak ada field yang kosong saat ini menambahkan data pada graphql dari field2 yang sudah di tentukan.

gunakan fungsi GraphQLNonNull

CONTOH YANG SALAH SAAT INPUT DATA:
	
	mutation {
	  addAuthor(name: "Genji") {
	    name
	  }
	}

  kurang data age