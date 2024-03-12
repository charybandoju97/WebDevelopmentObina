const express=require('express');
const dotenv=require('dotenv').config({path:'.env'});
const authRouter=require('./Routes/AuthRoute.js');
const jobPostedRouter=require('./Routes/JobPostedRoute.js');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDb=require('./Database/Database.js');
const app=express();

app.use(cors({credentials:true,
 origin:"http://localhost:3000"
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDb();
app.use('/',authRouter);
app.use('/jobs',jobPostedRouter);

app.listen('2000',"0.0.0.0",()=>{console.log('Server running on port : 2000')});