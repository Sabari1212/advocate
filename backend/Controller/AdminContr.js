const model = require("../Model/userLogin")
const bcrypt=require('bcryptjs')


exports.getAdmin = async (req, res) => {
    try {
        const data = await model.findOne({username:req.body.username})
        if(!data){
            res.status(400).send("No username found")
        }
        else{
            const valid=await bcrypt.compare(req.body.password,data.password);
            if(!valid){
               return res.status(400).send("Password is incorrect")
            }
                res.status(200).send("Login Successful")
    
    
            }
            

        }
       
       
    catch (err) {
        res.status(400).send("Invalid username and Password")
    }
}
exports.CreateAdmin =  (req, res) => {
    try {
        const {username} = req.body
         bcrypt.genSalt(10,(err,salt)=>{
              bcrypt.hash(req.body.password,salt,(err,hashedPassword)=>{
                const password=hashedPassword
                const response =model.create({username,password})
                res.status(200).send("User Added")
               
              })
         })
        

    }
    catch(err){
        res.status(500).send("Error in admin login")
    }
}