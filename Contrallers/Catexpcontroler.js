
const CatExpmodel=require('../Models/Catexpmodel');
const joi=require('joi');
//get
const GetcatEXPENSE=async(req,res)=>{
    try {
        const Getall=await CatExpmodel.find()
       res.status(200).send(Getall);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//getbye One

const GetOnes=async(req,res)=>{
    try {
        const{id}=req.params
        const Getbye_One=await CatExpmodel.findById(id)
       res.status(200).send(Getbye_One);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//validations
const exoensevalidations=(Evalidation)=>{
    const exp=joi.object({
        C_name:joi.string().required()
      
    })
    return exp.validate(Evalidation)
}
//post
const EXpensePost=async(req,res)=>{
    try {
        const {er}=exoensevalidations(req.body)
        if(er)
         return res.status(400).send(er.message);
//
const expenses=new  CatExpmodel(req.body)
await expenses.save();
res.status(200).send({message:'Success full posted !',Expense:expenses});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//update
const UPdate=async(req,res)=>{
    try {
        const{id}=req.params
        const CatExUPdate=await CatExpmodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send({message:'Success full updated',expenses:CatExUPdate});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
//datelete
const Deletes=async(req,res)=>{
    try {
        const{id}=req.params
        const cat_exDeletee=await CatExpmodel.findByIdAndDelete(id);
        res.status(200).send({message:'Success full Deleted !',EXPDelet:cat_exDeletee});

    } catch (error) {
     res.status(400).send(error.message)
    }
}
module.exports={GetcatEXPENSE,GetOnes,EXpensePost,UPdate,Deletes}
