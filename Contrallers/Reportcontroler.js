
const SelesModel=require('../Models/Salesmodel');

//post
 const findtDates= async(req,res)=>{

     
    try {
   
  
      const startDate = req.body.startDate; // start date
      const endDate = req.body.endDate //  end date
  
      
  
      const results =  await SelesModel.find({
        Date: {
          $gte: startDate,
          $lte: endDate
        }
      });

    //   console.log("date",startDate)
    //   console.log("maxa kujiro",endDate)

        return res.status(200).json({results});

//    await fil.save(fil);
   
    }catch (error) {
     res.status(400).send(error.message)
    }
}

module.exports={findtDates}