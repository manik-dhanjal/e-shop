import mongoose from "mongoose"
import User from "./userModels.js";


const ProductSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    mrp:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:0
    },
    image:{
        type:[String],
        required:true
    },
    category:{
        type:[String],
        required:true
    },
    brand:{
        name:{
            type:String,
            required:true
        },
        img:String
    },
    specs:{
        type:[{
                name:String,
                value:String
            }],
    },
    shipping:{
        dimensions:{
            width:Number,
            height:Number,
            length:Number
        },
        weight:Number
    },
},
{
    timestamps:true
})

const Product= mongoose.model('Product',ProductSchema)

export default Product;
