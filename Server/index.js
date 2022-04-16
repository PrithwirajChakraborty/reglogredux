const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

const User = require('./Routes/adds') 

mongoose.connect('mongodb+srv://user:123@cluster0.j6jrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('Dataabase connected');
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())        

app.use('/user',User)

app.use((req,res,next)=>{
    res.status(200).json({
        messege:'app is running'
    })
})

app.listen(4001,()=>{
    console.log("running on port 4001");
});