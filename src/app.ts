import './config/env';

import express from 'express';

import constants from './config/constants';
import './config/db.ts';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

middlewares(app);

routes(app);

app.listen(constants.PORT, () => {
  console.log(`server is running on port ${constants.PORT}`);
  console.log(`running environment is ${process.env.NODE_ENV}`);
});
