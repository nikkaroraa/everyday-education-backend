import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

import routes from './config/routes';
import constants from './config/constants';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({
  extended: true,
}));


app.get(routes.Status, (req, res) => {
  res.json({ status: 'Working!' });
});

const server = app.listen(constants.PORT, () => {
  console.log(`Backend is running on PORT: ${constants.PORT}`);
});

export default server;
