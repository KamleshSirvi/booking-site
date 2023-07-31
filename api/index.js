const express = require("express");
// import dotenv from "dotenv"
const mongoose = require('mongoose')

require("dotenv").config()

const app = express();
const connect = async() => {
   try{
      await mongoose.connect(process.env.MONGO);
      console.log(`connected to database`);
   }catch(error){
      throw error;
   }
}

// it is usefull for mongodb connection
// when database disconnected
mongoose.connection.on("disconnected", () => {
   console.log("daatabase disconnected");
})

// agan database connectes
mongoose.connection.on("connected", () =>{
   console.log("database connected");
})

// api connection
app.get("/", (req, res) =>{
   res.send("api is working")
})




const port = process.env.PORT || 8800;

app.listen(port, (req, res) => {
   connect();
   console.log(`connected to the backend`);
})