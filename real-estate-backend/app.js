const express = require("express");
const connectDB = require("./database/connection");
const  userRoute  = require("./routes/user");
const signIn = require("./routes/SignIn");
const signOut = require("./routes/Logout");
const Search = require("./routes/Search");
const app = express();
require('dotenv').config();

const cors = require("cors");

app.use(cors());


const properties = require("./routes/properties")
const getProperties = require("./routes/getProperties")





const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extented: true}));

app.use(express.json());
app.use(cookieParser());




app.use("/api/v1",userRoute);
app.use("/api/v1", signIn);
app.use("/api/v1", signOut);
app.use("/",properties);
app.use("/",getProperties);
app.use("/",Search);




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



