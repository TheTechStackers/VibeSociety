import 'reflect-metadata';
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { buildSchema } = require('type-graphql');
const { HelloResolver } = require('./resolvers/Hello');
const cors = require('cors');


const main = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(express.static("../../client/dist"));

  app.get('/', (req:any, res: any) => {
    console.log(req);
    res.send("HELLOOOO");
  })

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    introspection: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(8080, () => 'the server started');
};

main();
