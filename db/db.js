import mongoose from "mongoose"

const youtube ="youtube"
const connectDB = async()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MOONGODB_URI}`)
        console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log(error)
        console.log("not connected");

    }
}

export default connectDB




