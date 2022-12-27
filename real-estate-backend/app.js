const express = require("express");
const connectDB = require("./database/connection");
const app = express();
require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 5000

const start = async ()=>{
    try {
       await connectDB(process.env.MONGO_URL)
        app.listen(PORT,()=>{
            console.log(`SERVER LISTEN ON PORT ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()



