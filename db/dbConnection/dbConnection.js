// getting-started.js
const mongoose = require('mongoose');

export async function dbConnect() {
 try{
    const conn = await mongoose.connect(process.env.MONGOSE_URI);
    console.log("connected");
    return conn;
 }catch(err){
    console.log(err)
 }
}