const express=require('express')
const { CreateUser, getUser, getPdf, deleteUser } = require('../Controller/UserController')
const { getAdmin, CreateAdmin } = require('../Controller/AdminContr')
const routes=express.Router()

routes.post('/post',CreateUser)
routes.get('/get',getUser)
routes.get('/pdf',getPdf)
routes.post('/get/login',getAdmin)
routes.post('/post/login',CreateAdmin)
routes.delete('/delete/:id',deleteUser)

module.exports=routes