import express from "express"
import  products from "./data/products.js"
import  dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"
const app = express()


dotenv.config()
connectDB()


app.get("/",(req,res)=>{
    res.send("API is running nikal madarchod...")
})

app.get("/api/product",(req,res)=>{
    res.json(products)
})

app.get("/api/product/:id",(req,res)=>{
   var product= products.find((product)=>product._id===req.params.id)
    res.json(product)
})

var PORT= process.env.PORT || 8080
app.listen(8080,()=>{
    console.log(`server is in ${process.env.NODE_ENV} and live at PORT: ${PORT}`.blue.bold)
})