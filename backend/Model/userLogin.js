const mongoose=require('mongoose')

const schema=mongoose.Schema

const newSchema=schema({
    username:{
        type:String,
        required:[true,"Enter your Username"],
        trim:true

    },
   
    password:{
        type:String,
        required:[true,"Enter your password"],
    },
},{timestamps:true})

const model=mongoose.model("Admin",newSchema)


module.exports=model