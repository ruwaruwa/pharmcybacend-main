// const joi=require('joi')
// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')

// require('dotenv').config()
// const lognvaidation=(loginvali)=>{
//     const logivalidtes=joi.object({
//         email:joi.string().email().required(),
//         password:joi.string().required(),
//         status:joi.string().required()
//     })
//     return logivalidtes.validate(loginvali)
// }
// const Mylogin=async(req,res)=>{
//     const {err}=lognvaidation(req.body)
//     if(err) return res.status(400).send({err})

//    try {
//      /////my data that has ben 
//      const user= await usermodel.findOne({email:req.body.email,status:'active'})
//      if(!user) return res.status(404).send({err:'email not found'})
//      const chechpass= await bcrypt.compare(req.body.password,user.password)
//      if(!chechpass) return res.status(400).send({err:'in valid password'})
//      const token= jwt.sign({
//          email:user.email,
//          id:user._id,
//          role:user.role
//      },process.env.SECRET_KEY,{expiresIn:'1h'})
//      return res.status(200).send({Accestoken:token,login:true})
    
//    } catch (error) {
//     res.status(400).send({error})
//    }
// }
// module.exports={Mylogin}