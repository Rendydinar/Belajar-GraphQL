const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

// connect to database
mongoose.connect('mongodb://localhost:27017/gpql-ninja', {
  useNewUrlParser: true, 
  useUnifiedTopology: true	
}, (err) => {
  if(!err) console.log('connected to database');
});

// GraphQL Midleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // menggunakan graphiql tool
}));

app.listen(4000, () => console.log('server running on port 4000'));