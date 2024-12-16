const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const mongoose=require('mongoose')
const routes = require('./Router/UserRouter')
const app=express()
dotenv.config()

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URL).then(con=>{
    app.listen(process.env.PORT,()=>{
        console.log("MongoDb Connected Successfully to "+con.connection.host)
    
    })}


).catch(error=>{
    console.log(error)
})

app.use('/api',routes)
