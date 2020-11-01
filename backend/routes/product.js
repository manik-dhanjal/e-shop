import express from "express"
import mongoose from "mongoose"
import Product from "../models/productModels.js"
import asyncHandler from "express-async-handler"
const router = express.Router()

router.get("/",asyncHandler( async (req,res)=>{
    const product=await Product.find({});
    res.json(product)
}))

router.get("/:id",asyncHandler( async(req,res)=>{

        const product= await Product.findById(req.params.id)

        if(!product)
         throw   new Error("product not found")
           
        res.json(product)
   
}))

export default router