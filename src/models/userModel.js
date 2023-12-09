import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({ 
    username : {
         type: String,
         required: [true, "please provide a valid username"],
         unique: true,
    },
    email : {
        type: String,
        required: [true, "please provide a valid email"],
        unique: true,
   },

 password : {
    type: String,
    required: [true, "please provide a valid password"],
    
},
first_name: {
type: String,
required: [true, "please provide a valid password"],
    
},
isVerified : {
    type: Boolean,
    default: false,
},
isAdmin :{
    type: Boolean,
    default: false,
},
forgotPaaswordToken: String,
forgotPaaswordTokenExpiry: Date,
vrifyToken: String,
vrifyTokenExpiry: Date,

});
const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;
