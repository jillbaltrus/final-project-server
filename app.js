import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_TH_CONNECTION_STRING
 || 'mongodb://127.0.0.1:27017/turtlehub';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
app.listen(process.env.PORT || 4000);
