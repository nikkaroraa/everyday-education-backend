import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const {
  PRISMA_SECRET,
  PRISMA_ENDPOINT,
} = process.env;


export default {
  PORT,
  PRISMA_SECRET,
  PRISMA_ENDPOINT,
};
