const express = require('express');
const path =require('path');
const app = express();
const bcrypt= require('bcrypt');
const connectDB = require("./config/db");
const user= require('./models/user');

app.set('view engine' , 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/' , (req,res)=>{
    res.render('home');
});

app.get('/login' , (req,res)=>{
    res.render('login');
});


app.get('/signup', (req,res)=>{
    res.render('signup');
});

app.post('/redirect-signup', async (req,res)=>{
    const { username , email , password} = req.body;
    const isunique =await user.findOne({email: email});
    if(isunique){
        return res.status(500).send('User already exists !');
    }
    const hpw= await bcrypt.hash(password,10);
    await user.create({
        username:username,
        email:email,
        password:hpw,}
    )
    res.redirect('/welcome');

    });

    app.post('/redirect-login', async (req,res)=>{
        const {email , password} = req.body;
        const userdata =await user.findOne({email});
        if(!userdata){
            return res.status(500).send("User doesn't exists !");
        }

        const chk = await bcrypt.compare(password,userdata.password);
        if(!chk){
            return res.status(500).send("Invalid Credentials !");
        }
        
        res.redirect('/welcome');
    
        });


    app.get('/welcome' , (req,res)=>{
        res.render('welcome');
    })
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Started on port: ${port}`);
    
})

