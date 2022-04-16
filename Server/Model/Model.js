const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phonenumber:String,
    address:String,
    password:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = new mongoose.model('user',userSchema)