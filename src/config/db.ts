import mongoose from 'mongoose';

import constants from './constants';

try {
  mongoose.connect(constants.DB_URL, {
    useNewUrlParser: true,
  });
} catch (error) {
  mongoose.createConnection(constants.DB_URL);
}

mongoose.connection
  .once('open', () => {
    console.log('mongoDB is running');
  })
  .on('error', error => {
    throw error;
  });
