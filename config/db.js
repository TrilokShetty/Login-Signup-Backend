const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log("DB not Connected");
})

