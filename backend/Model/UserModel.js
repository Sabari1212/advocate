const mongoose=require('mongoose')

const schema=mongoose.Schema

const newSchema=schema({
    Name:{
        type:String,
        required:[true,"Enter your name"],
        trim:true

    },
    Email:{
        type:String
        
    },
    Mobile_No:{
        type:Number,
        minLength:[10,"Enter correct Mobile number"],
        maxLength:[10,"Enter correct Mobile number"]

    },
    Message:{
        type:String,
    },
},{timestamps:true})

const model=mongoose.model("Clients",newSchema)


module.exports=model