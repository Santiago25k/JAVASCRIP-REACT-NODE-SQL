import mongoose from 'mongoose';

export const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern-app');
    console.log('MongoDB Connection Succeeded.');
  } catch (error) {
    console.error('Error in DB connection: ', error);
  }
};