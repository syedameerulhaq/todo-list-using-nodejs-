import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/db.js"
import routs from "./routes/routes.js"
dotenv.config({
    path : "./env"
})

const app = express()
connectDB()

//middlewares
app.use(express.urlencoded())
app.use(express.static("public"))
app.set("view engine", "ejs")


// routes
app.use (routs)


app.listen(process.env.PORT,()=>{
    console.log(`the server is running on port ${process.env.PORT}`)
})