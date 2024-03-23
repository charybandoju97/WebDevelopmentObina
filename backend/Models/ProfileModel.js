const mongoose= require("mongoose");

const profileSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
     name:{
        type:String,
        required:true
     },
     age:{
        type:String,
        required:true
     },
     mobile:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     }
});

const profileModel=new mongoose.model("ProfileModel",profileSchema);


module.exports =profileModel;