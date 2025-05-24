import{ mongoose } from 'mongoose';
const emailSchema= mongoose.Schema( {
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true

    },
    password:{
        type:[],
        required:[true,"password is required"]
        }
    
})

export const Email = mongoose.model("Email",emailSchema);