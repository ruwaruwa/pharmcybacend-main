const moongoose=require('mongoose');
const SalesShema= new moongoose.Schema({
    Medicine_ID:{
        type:moongoose.Types.ObjectId,
        ref:'Medicin',
        required:true
    },
    Qty:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    
     Discount:{
        type:Number,
        required:true,
  
     },
    Total:{
        type:Number,
  
    },
    Date:{
        type:String,
        required:true
     },

})


const SelesModel=moongoose.model('SALESMODEL',SalesShema);



module.exports=SelesModel