import mongoose from "mongoose";

export interface IUser {
     _id?:string;
    name:string,
    email:string,
    otp?:number,
    DateOfBirth:string
}

const UserSchema =  new mongoose.Schema<IUser>({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    otp:{
        type:Number,
    },
    DateOfBirth:{
        type:String,
        require:true
    },
})


const Users = mongoose.models.Userss || mongoose.model<IUser>("MyUser",UserSchema)

export default Users