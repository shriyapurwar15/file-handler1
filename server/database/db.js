import mongoose from 'mongoose'


const DBConnection=async()=>{
    const MONGODB_URI=`mongodb://shriyapurwar:goodgirl@ac-9fnb8yt-shard-00-00.0uiuhyi.mongodb.net:27017,ac-9fnb8yt-shard-00-01.0uiuhyi.mongodb.net:27017,ac-9fnb8yt-shard-00-02.0uiuhyi.mongodb.net:27017/?ssl=true&replicaSet=atlas-rn7dcf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
     await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
     console.log("Database connected successfully");
    }catch(error)
    {
      console.log("Error while connecting with the database",error.message)

    }
}

export default DBConnection;