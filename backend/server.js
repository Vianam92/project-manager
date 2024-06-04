import express, { json } from "express";
import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Mongo DB connected');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });
