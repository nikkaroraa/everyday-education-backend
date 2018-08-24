import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import resolvers from './resolvers';
import constants from './config/constants';


const {
  PORT,
  PRISMA_SECRET,
  PRISMA_ENDPOINT,
} = constants;

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: PRISMA_ENDPOINT,
      secret: PRISMA_SECRET,
      debug: true,
    }),
  }),
});

const options = {
  port: PORT,
};

server.start(options, ({ port }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at http://localhost:${port}`);
});
