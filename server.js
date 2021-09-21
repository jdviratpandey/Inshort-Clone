import express from "express";
import  connection from './db/conn.js';
import router from "./rout/routes.js";
import defaultData from "./insertdata.js";
import cors from 'cors'
import bodyParser from "body-parser";
import DotEnv from "dotenv"
import { connection } from "mongoose";

DotEnv.config();

const app =express();
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 5000;

app.use('/',router);

defaultData();




if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));/*  */
}

const url= "mongodb+srv://virat:pandey@cluster0.yqj0l.mongodb.net/home_News?retryWrites=true&w=majority";

connection( process.env.MONGODB_URI || url)
app.listen(port,(()=>{
    console.log(`server is running on ${port}`)
}))