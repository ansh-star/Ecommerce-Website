import mongoose from 'mongoose';
import colors from 'colors';

//var mongoose = require('mongoose');
//const mongoose = require('mongoose');
// const connectDB =  ()=>{
//     mongoose.connect("mongodb+srv://AnshKesarwani:AnshKesarwani123@cluster0.sagcjxg.mongodb.net/ecommerce")
//     .then((con) => {console.log(`Database Connected : ${con.connection.host}`.bgMagenta.white)})
//     .catch((err)=>{console.log(`${err}`)})
 
// };
const connectDB =async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Errro in Mongodb ${error}`.bgRed.white);
    }
};
export default connectDB;