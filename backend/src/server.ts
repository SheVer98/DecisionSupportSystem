import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import cors from "cors";
import carRouter from './routers/car.router';
import { dbConnect } from './configs/database.config';

dbConnect();

const app = express();
//localhost:4200
//localhost:5000
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/cars",carRouter);




const port=5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port);
})