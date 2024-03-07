const mongoose=require('mongoose');

const connect=async ()=>{
    try{
        await mongoose.connect(process.env.Mongo_URL,{dbName:process.env.DatabaseName});
        console.log("Database connected!");
    }
    catch(err)
    {
        console.log("Database connectivity error!",err);
    }
}

module.exports=connect;