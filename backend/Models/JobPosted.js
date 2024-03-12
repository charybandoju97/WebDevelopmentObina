const mongoose=require('mongoose');

const jobPostedSchema=mongoose.Schema({
     profile:
     {
        type:String,
        required:true
     },
      salaryRange:
     {
        type:String,
        required:true
     },
     jobType:
     {
        type:String,
        required:true
     },
     partOrFull:
     {
        type:String,
        required:true
     },
     datePosted:
     {
        type:String,
        required:true
     },
     locationType:
     {
        type:String,
        required:true
     },
     expirationDate:
     {
        type:Date,
        required:true
     }
});
jobPostedModel=new mongoose.model("JobPostedModel",jobPostedSchema);

module.exports=jobPostedModel;
