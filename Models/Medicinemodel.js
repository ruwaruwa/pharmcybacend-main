const moongoose=require('mongoose');
const MedicineSchema= new moongoose.Schema({
    Category_ID:{
        ref:'Category',
        type:moongoose.Types.ObjectId,
        required:true
    },
    Item_name:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true,

     },
     Qty:{
        type:Number,
        required:true,

     },
    
    Description:{
       type:String,
    required:true
    },
     Exp_Date:{
        type: Date,
        default:new Date
     },
    
},{timestamps:true})
const MedicineModel=moongoose.model('Medicin',MedicineSchema);
module.exports=MedicineModel