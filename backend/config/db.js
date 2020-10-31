import mongoose from "mongoose"

const connectDB= async ()=>{
    try{
        const db = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true, 
        })
        console.log(`database is connected to : ${db.connection.host}`.yellow)
    }
    catch(e){
       console.error(`Error: In database ${e}`.red.bold)
       process.exit(1)
    }
    
}

export default connectDB