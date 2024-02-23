// npm install --save dotenv
import dotenv from 'dotenv';
dotenv.config();
// npm install cors --save
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
const mongoString = process.env.dbURL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

import routes from './routes.js';

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
