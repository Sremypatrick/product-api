import express from "express";
import { createProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

//get All Products
router.get("/",getProducts );    
//create products
router.post("/", createProduct);
//update endpoint
router.put("/:id", updateProduct);
//delete endpoint
router.delete("/:id",);

export default router;