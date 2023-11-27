const moongoose= require('mongoose')
const UserSchemma=new moongoose.Schema({
username:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
status:{
    type:String,
    default:'active',
    enum:["active","pendin","blocked"]
   
},
role:{
    type:String,
default:"admin",
    enum:["admin","CustamerCare","user"]
}

},{timestamps:true})
const Usermodel= moongoose.model('usermodel',UserSchemma)
module.exports=Usermodel