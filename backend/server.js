import express from "express"
import  products from "./data/products.js"
import  dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"
import product from "./routes/product.js"
import {notFound,mainErrorHandler} from "./middleware/errorHandler.js"

const app = express()


dotenv.config()
connectDB()

app.use("/api/product",product)

app.get("/",(req,res)=>{
    res.send("API is running nikal madarchod...")
})
app.use(notFound)
app.use(mainErrorHandler)

var PORT= process.env.PORT || 8080
app.listen(8080,()=>{
    console.log(`server is in ${process.env.NODE_ENV} and live at PORT: ${PORT}`.blue.bold)
})