import mongoose from "mongoose";

const DBConnection = async(url:any)=>{
    try {
         await mongoose.connect(url)
    } catch (error) {
         console.log(error) 
    }
}

export default DBConnection