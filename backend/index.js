import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import detailsRoutes from './routes/details.js';
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(
  cors({
    methods: ["GET", "POST","DELETE"],
    credentials: true,
    origin:  "http://localhost:3000"
  })
);

app.use('/', detailsRoutes);

const CONNECTION_URL = 'mongodb+srv://ALITEST:test2728.@cluster0.bnao4.mongodb.net/test';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));





