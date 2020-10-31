import mongoose from "mongoose"
import User from "./userModels"

const OrderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    orderedItems:[{
            name:{ type:String, required:true},
            qty:{type:Number, required:true},
            image:{ type:String, required:true},
            price:{ type:Number, required:true},
            products:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product'
            }
    }],
    shippingAddress:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:Number,required:true},
        country:{type:String,required:true},
    },
    paymentMethod:{
         type:String,
         required:true
    },
    paymentResult:{
       id:String,
       status:String,
       update_time:String,
       email_address:String,
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    ShippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    PaidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false
    } ,
    deliveredAt:{
        type:Date
    }
    
},{
    timestamps:true
})

const Order = mongoose.model('order',OrderSchema)

export default Order;