const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// GraphQL Midleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // menggunakan graphiql tool
}));

app.listen(4000, () => console.log('server running on port 4000'));