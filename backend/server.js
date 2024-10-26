import express from 'express';
import dotenv from "dotenv";
import { connectDB } from '../backend/config/db.js';
import productRoutes from '../backend/routes/products.routes.js'
dotenv.config();
const app = express();
const PORT= process.env.PORT || 5000;
app.use(express.json());//aloow us to accept Json data in req.body
app.use("/api/products", productRoutes);
//mongo db
console.log(process.env.MONGO_URI);
app.listen(PORT,()=>{
    connectDB();
    console.log(" server started at http://localhost:"+ PORT);
});

//q1K2HjC2codyrsJp