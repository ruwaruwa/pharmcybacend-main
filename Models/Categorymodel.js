const moongoose=require('mongoose');

const CategorySchema=new moongoose.Schema({
name:{
    type:String,
    required:true,
},

},{timestamps:true});
const Categorymodel=moongoose.model('Category',CategorySchema)
module.exports=Categorymodel