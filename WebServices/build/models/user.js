import mongoose from "mongoose";
var UserSchema = new mongoose.Schema({
    uid: { type: String, unique: true },
    name: { type: String }
});
export default mongoose.model('User', UserSchema);
