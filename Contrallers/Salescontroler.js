const express = require('express');
const SelesModel = require('../Models/Salesmodel');
const joi = require('joi');
const MedicineModel = require('../Models/Medicinemodel');

const Categorymodel=require('../Models/Categorymodel')
//get
const GetSeles = async (req, res) => {
    try {
        const Getall = await SelesModel.find().populate({
            path: 'Medicine_ID',
            module: 'Medicin',
            select: 'Price Qty'
        })
        // let MedicineData= await MedicineModel.findOne({_id:req.body.Medicine_ID})
        // const totalSeles=MedicineData.price*req.body.Qty
        res.status(200).send({ Getall });
        //"Total":totalSeles
    } catch (error) {
        res.status(400).send(error)
    }
}

//getbye One 

const GetOnes = async (req, res) => {
    try {
        const { id } = req.params
        const Getbye_One = await SelesModel.findById(id);
        if (!Getbye_One) return res.status(400).send({ message: "majiro seles kaan" })
        res.status(200).send(Getbye_One);

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//validations
const SELESevalidations = (selesvalidation) => {
    const seles = joi.object({
        Medicine_ID: joi.string().required(),
        Price: joi.number().required(),
        Qty: joi.number().required(),
        // total:joi.number().required(),
        Discount: joi.number().required(),
        Date:joi.string().required()
    })
    return seles.validate(selesvalidation)
}
//post
const SelesPost = async (req, res) => {
    try {
        const { er } = SELESevalidations(req.body);
        if (er) {
            return res.status(400).send(er.message);
        }
      //  return console.log(req.body)
        req.body.forEach( async(items) =>{
            let mdData = await MedicineModel.findOne({ _id: items.Medicine_ID });
            // console.log("maxa kujiro", mdData);
     
             if (!mdData) {
                 return res.send("store Id is not found !");
             }
     
             if (mdData.Qty < items.Qty) {
                 return res.send('this quantity is not in store');
             }
        console.log("items",items.Medicine_ID)
      })
      //quenty sec
      req.body.forEach( async(items) =>{
        let mdData = await MedicineModel.findOne({ _id: items.Medicine_ID });
        let editQuantity = mdData.Qty - parseInt(items.Qty);

    //     items.Qty = mdData.Qty;
    //     items.Price = mdData.Price;
    //     items.Discount = mdData.Discount;
    //     items.Total = mdData.Price * items.Qty;

        mdData.Qty=editQuantity;
        mdData.save();

    //console.log("items",items.Medicine_ID)
  })


  //date // The specific date you want to find


//end

// const targetDate = new Date('2023-10-22'); 
// await SelesModel.aggregate([
//   {
//     $match: { dateField: targetDate }, // marka filter  by the specific date
//   },
//   {
//     $group: {
//       _id: null,
//       totalQuantity: { $sum: '$Qty' }, // Sum the quantity 
//     },
//   },
// ], (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(result);
//   }
// });



     // const newdata= new SelesModel(req.body)

      const newdata=  await SelesModel.insertMany(req.body);
     





        res.status(200).send({message:'Success full posted !',newdata:newdata})

      

       

    //    const selResult=req.body
    //    await MedicineModel.findByIdAndUpdate(req.body.Medicine_ID,{
    //    Total:editQuantity
    //    },{new:true});

       await newdata.save();

       res.status(200).send({
        status:true,
        newdata:'succ fuly aded!',
        message:'succesfull posted and updated ',
        total:editQuantity
       });
       console.log('total',editQuantity)

        // const totalamount = mdData.Price + parseInt(req.body.Qty);

        //date


     } 
    catch (error) {
        res.status(400).send(error.message);
    }
};

// let mdData=await MedicineModel.findOne({_id:req.body.Medicine_ID})
//  const totalSeles=mdData.price*req.body.Qty

// const Totalamount=MedicineData.price+totalSeles
// console.log('totalamunts',Totalamount+totalSeles)
// const quantity=MedicineData.price-req.body.Qty
//  console.log(quantity)
//  await SelesPost.save();

//  console.log("total seles",totalSeles)
// 




//update
const UPdate = async (req, res) => {
    try {
        const { id } = req.params
        // const{price,Qty}=req.body
        const SELUPdate = await SelesModel.findByIdAndUpdate(id, req.body, { new: true });





        res.status(200).send({ message: 'Success full updated', StoreUpdates: SELUPdate });

    } catch (error) {
        res.status(400).send(error.message)
    }
}
//datelete
const Deletes = async (req, res) => {
    try {
        const { id } = req.params
        const SelesDeletee = await SelesModel.findByIdAndDelete(id);
        res.status(200).send({ message: 'Success full Deleted !', SELES_Delete: SelesDeletee });

    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = { GetSeles, GetOnes, SelesPost, UPdate, Deletes }
