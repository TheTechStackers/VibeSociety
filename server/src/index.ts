import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';
import path from 'path';
import { ShowsResolver } from './resolvers/Shows';

const main = async () => {
  const app = express();
  const CLIENT_PATH = path.resolve(__dirname, '..', '../../client/dist');
  console.log(CLIENT_PATH);
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(CLIENT_PATH));
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ShowsResolver],
      validate: false,
    }),
    introspection: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../client/dist/index.html'));
  });
  app.listen(8080, () =>
    console.log(`server started at http://localhost:8080/graphql`)
  );
};

main();
