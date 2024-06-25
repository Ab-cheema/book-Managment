import express from "express";
import {PORT,mongoDBURL} from './config.js';
//wuzRaEayk3PBwUSD
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoutes.js'
const app=express();
import cors from 'cors';

// Middleware for parsing request body
app.use(express.json());  

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });

//routes for save a new book
app.use('/books', booksRoute);

// app.listen(PORT,()=>{
//     console.log(`App is running ${PORT}`);
    
// })

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });