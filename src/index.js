import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"


dotenv.config({
    path: './.env'
})
const app = express()
connectDB();
/*
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`listening on ${process.env.PORT}`)
        })
    }catch(error){
        console.error("error", error)
        throw error
    }
})()
*/
app.listen(process.env.PORT, () =>{
    console.log(`server running on port ${process.env.PORT}`)
})