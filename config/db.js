const mongoose = require('mongoose');

require.env

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log("DB not Connected");
})

