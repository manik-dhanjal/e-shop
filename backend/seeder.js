// import mongoose from "mongoose"
import colors from "colors"
import dotenv from "dotenv"
import userData from "./data/user.js"
import productData from "./data/products.js"
import User from "./models/userModels.js"
import Product from "./models/productModels.js"
import Order from "./models/orderModels.js"
import connectDB from "./config/db.js"
dotenv.config()
connectDB()


const SeedData = async ()=>{
    try{
      await  User.deleteMany()
      await  Product.deleteMany()
      await  Order.deleteMany()
       
      const updatedUser = await User.insertMany(userData)
      const adminUser=updatedUser[0]._id;
       const productData2=productData.map(data=>{
          return {...data,user:adminUser}
        })

      await Product.insertMany(productData2)
        console.log("data is seeded successfully".green);
    }
    catch(e){
        console.log(`error while seeding ${e}`.red);
        process.exit(1)
    }
}

const DeleteData= async ()=>{
    try{
        await  User.deleteMany()
        await  Product.deleteMany()
        await  Order.deleteMany()
          console.log("data is deleted successfully".green);
      }
      catch(e){
          console.log(`error while deleting ${e}`.red);
          process.exit(1)
      }
}

if(process.argv[2]=="-d"){
    DeleteData()
}
else{
    SeedData()
}
