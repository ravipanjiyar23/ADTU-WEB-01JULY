const express = require('express');
const connectDB = require('./connection');
const authroutes = require('./routes/authroutes')
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', authroutes);


connectDB();


app.listen(7004,()=>{
    console.log('server started ');
})