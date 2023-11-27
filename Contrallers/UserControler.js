const Usermodel = require('../Models/Usermodel');
const bycribt = require('bcrypt');
const joi = require('joi');
const Getusers = async (req, res) => {
    try {
        const getal = await Usermodel.find();
        res.status(200).send({ getal });

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//get bye id
const Getoneuser = async (req, res) => {
    try {
        const { id } = req.params
        const getal = await Usermodel.findById(id);
        res.status(200).send(getal)

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//psot
const uservalidatons = (userval) => {
    const uservalidations = joi.object({
        username: joi.string().required(),
        Emai: joi.string().email().required(),
        password: joi.string().required(),
        role:joi.string().required(),
        status:joi.string().required()
    })
    return uservalidations.validate(userval)
}
const Userpost = async (req, res) => {
    try {
        const { er } = uservalidatons(req.body)
        if (er)
            return res.status(400).send(er.message);

        const userPost = new Usermodel(req.body)
        userPost.password = await bycribt.hash(userPost.password, 5);
        //hadii o hore ujiray
        const alluser = await Usermodel.find({Email:req.body.Emai});
        if (alluser.length > 0) return res.status(200).send({ status: "this user has already exsist!! " })

        await userPost.save();
        res.status(200).send({ message: 'Success full posted !', Users: userPost });

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//EDit
const EDitusers=async(req,res)=>{
    try {
      const{id}=req.params
      const updateuser= await Usermodel.findByIdAndUpdate(id)
      res.status(200).send({message:"successfull updated !",updated:updateuser});
    } catch (error) {
      res.status(400).send(error.message)
    }
  
  }

//Delete
const Deluser=async(req,res)=>{
  try {
    const{id}=req.params
    const deleteuser= await Usermodel.findByIdAndDelete(id)
    res.status(200).send({message:"successfull deleted !",Delete:deleteuser});
  } catch (error) {
    res.status(400).send(error.message)
  }

}
module.exports = { Getusers, Getoneuser, Userpost,Deluser ,EDitusers}