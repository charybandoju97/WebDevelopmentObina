const express=require('express');
const dotenv=require('dotenv').config({path:'.env'});

const cors=require('cors');

const app=express();


app.listen('2000',"0.0.0.0",()=>{console.log('Server running on port : 2000')});