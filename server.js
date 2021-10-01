import express from "express";
import  connection1 from './db/conn.js';
import router from "./rout/routes.js";
import defaultData from "./insertdata.js";
import cors from 'cors'
import bodyParser from "body-parser";
import DotEnv from "dotenv"


DotEnv.config();

const app =express();
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 5000;

app.use('/',router);

defaultData();


app.listen(port,(()=>{
    console.log(`server is running on ${port}`)
}))