import { GraphQLServer } from 'graphql-yoga';


import resolvers from './resolvers';
import constants from './config/constants';


const { PORT } = constants;

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

const options = {
  port: PORT,
};

server.start(options, ({ port }) => {
  console.log(`🚀  Server ready at http://localhost:${port}`);
});
