import mongoose from "mongoose"


const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    ratings:{
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
    images:{
        type:[string],
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
            default:false
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

const product= mongoose.model('Product',ProductSchema)

export default product;
