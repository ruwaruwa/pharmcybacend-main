const jwt=require('jsonwebtoken');
const Usermodel=require('../Models/Usermodel');
const authent=(userRollers)=>{

    return async(req,res,next)=>{
        const tokenheader=req.headers['authorization']
        if(!tokenheader)return res.status(404).send('acces token is not provider !!! ')
        const token=tokenheader.split(' ')[1]
      //bearers 
        // if(!token) return res.status(401).send('Acess denied')
        console.log('token ayaad heshe hore usoco',token);
    try {
        const varifytken=jwt.verify(token,process.env.SECRETKEY);
        const user=await Usermodel.findById(varifytken.id);
        console.log('tokendata',varifytken.id);
        if(!user)return res.status(401).send('user not found !!');
        if(!user.status=='active')res.status(404).send('this user is not active !!');
        if(!userRollers.includes(user.role))return res.status(404).send('you are not allowed to access !!');
        console.log(user.role);

        next();

    } catch (error) {
        res.status(404).send(error.message)
    }
    }
}
module.exports=authent