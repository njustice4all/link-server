import { Express } from 'express';

import linkRoutes from './link';

export default (app: Express) => {
  app.use('/', linkRoutes);
};
