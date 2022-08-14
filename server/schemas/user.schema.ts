import { Schema,model,models } from "mongoose";

const userSchema= new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    salt:String,
})
const User = models.users || model("users",userSchema);

export default User;