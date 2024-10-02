import mongoose,{connect} from "mongoose";


const dbConnect =  async () => 
{
   try {
    const connectionEst = await connect(`${process.env.DB_URL}`);
    
   } catch (error) {
    console.log("MongoDb Connection Error" , error);
    process.exit(1);
} 
   
};