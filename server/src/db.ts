import mongoose from 'mongoose';
import config from './config';

export default async function makeDatabaseConnction() {
  await mongoose.connect(config.mongoURI)
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => {
    console.error('mongoDB connection failed...');
    throw err;
  })
}
