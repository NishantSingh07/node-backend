import {Email} from './Email.models.js';
import{ mongoose } from 'mongoose';

const userSchema= mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Email"   
    }
  
}, 
  {timestamps:true} 
)




export const User = mongoose.model("User",userSchema)