const joi=require('joi')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
 const Usermodel=require('../Models/Usermodel')
require('dotenv').config()
const lognvaidation=(loginvali)=>{
    const logivalidtes=joi.object({
        Email:joi.string().email().required(),
        password:joi.string().required(),
        status:joi.string().required()
    })
    return logivalidtes.validate(loginvali)
}
//

const logins=async(req,res)=>{
    const {err}=lognvaidation(req.body)
    if(err) return res.status(400).send({err})

   try {
     /////my data that has ben 
     const user= await Usermodel.findOne({Email:req.body.Email,status:'active'})
     if(!user) return res.status(404).send({err:'email not found'})
     const chechpass= await bcrypt.compare(req.body.password,user.password)
     if(!chechpass) return res.status(400).send({err:'in valid password'})
     const token= jwt.sign({
        Email:user.Email,
         id:user._id,
         role:user.role
     },process.env.SECRETKEY,{expiresIn:'1h'})
     return res.status(200).send({Accestoken:token,login:true})
    
   } catch (error) {
    res.status(400).send({error})
   }
}
module.exports={logins}