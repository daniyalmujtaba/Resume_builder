import mongoose from "mongoose";
    

import IUser from "../interfaces/user";

const UserSchema : mongoose.Schema = new mongoose.Schema({
    uid : {type: String, unique:true},
    name : {type: String}   
});

export default mongoose.model<IUser>('User', UserSchema);
