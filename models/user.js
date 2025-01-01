const mongoose = require('mongoose');

const userSchema = {
    username:String,
    email:String,
    password:String,
}

const userModel = new mongoose.model('user',userSchema);

module.exports=userModel;