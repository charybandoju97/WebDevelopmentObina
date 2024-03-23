const express=require('express');
const router=express.Router();
const registerModel=require('../Models/AuthModel.js');
const profileModel = require('../Models/ProfileModel.js');



router.get('/cookieRequest',(req,res)=>{
    const username=req.cookies.username;
    if(username)
    {
        res.send({cookie:true});
    }
    else
    {
        res.send({cookie:false});
    }
});
router.get("/logout",(req,res)=>{
    const cookie=req.cookies.username;

    if(cookie)
    {
        res.cookie("username","",{expires:new Date(Date.now())});
        res.send({msg:"Removed cookies",cookieRemoved:true});
    }
    else
    {
        res.send({msg:"No cookies found!",cookieRemoved:false});
    }
});


router.post("/login",async (req,res)=>{
    const loginBody=req.body;
     console.log(loginBody);
    try
    {
        const user=await registerModel.findOne({email:loginBody.email});
        if(user)
         {
            if(user.password!==loginBody.password)
            {
                console.log("Login unsuccessful");
                return res.send({msg:"Password not correct",login:false});
            }
            else
            {
                console.log("Login");
                res.cookie("username",user.email,{maxAge:900000,httpOnly:true});
                return res.send({msg:"User registered",login:true});
            }
         }
         else
         {
            return res.send({msg:"Please register yourself first!",login:false});
         }
    }
    catch(err)
    {
       return res.send({msg:err,login:false});
    }
});

let email=null;
router.post("/register",async(req,res)=>{
    const registerBody=req.body;
    email=registerBody.email;
    try
    {
        const user=await registerModel.findOne({email:registerBody.email});
        if(user)
         {
            return res.send({msg:"User already registered",register:false});
         }
         else
         {
            let userCreated=new registerModel(registerBody);
            await userCreated.save();
            return res.send({msg:"User registered",register:true});
         }
    }
    catch(err)
    {
       return res.send({msg:err,register:false});
    }
});


router.route("/profile")
  .post(async(req,res)=>{
    const {name,age,mobile,address}=req.body;
    try
    {
            let userCreated=new profileModel({email,name,age,mobile,address});
            await userCreated.save();
            return res.send({msg:"User profile submitted",profile:true});    
    }
    catch(err)
    {
       return res.send({msg:err,profile:false});
    }
}).get(async(req,res)=>{
    const username=req.cookies.username;
    try
    {
        const profileDate=await profileModel.findOne({email:username});

        if(profileDate)
        {
            console.log(profileDate);
             res.send({profileData:profileDate,profile:true});
        }
        else
        {
            res.send({msg:"No profile found",profile:false});

        }
    }
   catch(err)
   {
    res.send({msg:err,profile:false});
   }
});

module.exports =router;