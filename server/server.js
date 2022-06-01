const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require('path');
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const cors = require('cors');
const {
  graphqlUploadExpress
} = require('graphql-upload');

const PORT = process.env.PORT || 3001;
//create new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //ensures every request performs an authentication check
  context: authMiddleware,
});
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
  app.use(express.static('./public/images'));
  app.use(graphqlUploadExpress());
// app.use(cors);

// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// } 



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


//create new instance of an Apollo server with the GraphQL data
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  //integrate apollo server with the Express application as middleware
  
  server.applyMiddleware({ app });
  
 

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      //log where we can go to test GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

//call the async function to start the server
startApolloServer(typeDefs, resolvers);