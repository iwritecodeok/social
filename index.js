const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js')

const pubsub = new PubSub
const PORT = 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    pubsub,
    context:({ req }) => ({ req })
  });


mongoose.connect(MONGODB, {useNewUrlParser:true, useUnifiedTopology: true})
server.listen({ port : PORT}).then(res => {
    console.log(`Server running at ${res.url}`);
})
.catch(err =>{
  console.error(err)
})