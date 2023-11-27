

const moongoose=require('mongoose');
const catexpSChema=new moongoose.Schema({
    C_name:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date
    }
})
const CatExpmodel=moongoose.model('qarashadka',catexpSChema)
module.exports= CatExpmodel ;