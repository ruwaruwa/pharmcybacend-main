

const moongoose=require('mongoose');
const expenseSChema=new moongoose.Schema({
    cat_id:{
        type:moongoose.Types.ObjectId,
           ref:'qarashadka',
           required:true
   
        },
    description:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
   
})
const Expensemodel=moongoose.model('expense',expenseSChema)
module.exports= Expensemodel ;