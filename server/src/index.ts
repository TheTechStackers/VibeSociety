import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { EventResolver } from './resolvers/Event';
import cors from 'cors';

const main = async () => {
  const app = express();

  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [EventResolver],
      validate: false,
    }),
    introspection: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(8080, () => 'server started');
};

main();
