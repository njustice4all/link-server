import express, { Express } from 'express';
import cors from 'cors';

export default (app: Express) => {
  // enable cors
  app.use(cors());

  // post body json parse
  app.use(express.json());
};
