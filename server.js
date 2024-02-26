// npm install --save dotenv
import dotenv from 'dotenv';
dotenv.config();
// npm install cors --save
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

const app = express();
const port = process.env.PORT || 3000; //mongodb://mongo:27017/Shan_FullStack-bootcamp/serverDB
const mongoString = process.env.dbURL;

mongoose.connect(mongoString); //connect to a MongoDB cloud
const database = mongoose.connection;

database.on('error', (error) => {
    console.error('Error connecting to the database:', error);
});

database.once('open', () => {
    console.log('Database connected sucessfully');
});

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server started at port ${3000}`);
});
