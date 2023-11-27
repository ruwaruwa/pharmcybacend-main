const SelesPost = async (req, res) => {
    try {
        const { er } = SELESevalidations(req.body);
        if (er) {
            return res.status(400).send(er.message);
        }
      // const newdata= new SelesModel(req.body)
        // await SelesModel.insertMany(req.body).then((resul)=>{
        //     console.log(resul)
        // })






       // res.status(200).send({message:'Success full posted !',Seles:SelesPost});


        const mdData = await MedicineModel.findOne({ _id: req.body.Medicine_ID });
       // console.log("maxa kujiro", mdData);

        if (!mdData) {
            return res.send("store Id is not found !");
        }

        if (mdData.Qty < req.body.Qty) {
            return res.send('this quantity is not in store');
        }

        let editQuantity = mdData.Qty - parseInt(req.body.Qty);

        req.body.Qty = mdData.Qty;
        req.body.Price = mdData.Price;
        req.body.Discount = mdData.Discount;
        req.body.Total = mdData.Price * req.body.Qty;
       mdData.editQuantity=editQuantity

       await MedicineModel.findByIdAndUpdate(req.body.Medicine_ID,{
       Total:editQuantity
       },{new:true});

       await newdata.save();

       res.status(200).send({
        status:true,
        newdata:'succ fuly aded!',
        message:'succesfull posted and updated ',
        total:editQuantity
       });
       console.log('total',editQuantity)

        // const totalamount = mdData.Price + parseInt(req.body.Qty);
     } 
    catch (error) {
        res.status(400).send(error.message);
    }
};
//////////////
const SelesPost = async (req, res) => {
    try {
        const { er } = SELESevalidations(req.body);
        if (er) {
            return res.status(400).send(er.message);
        }

        // Find the MedicineModel document by ID
        const mdData = await MedicineModel.findOne({ _id: req.body.Medicine_ID });

        if (!mdData) {
            return res.status(404).send("Medicine ID not found");
        }

        if (mdData.Qty < req.body.Qty) {
            return res.status(400).send('Insufficient quantity in store');
        }

        // Calculate the updated quantity and set it in the request body
        let editQuantity = mdData.Qty - parseInt(req.body.Qty);
        req.body.Qty = mdData.Qty;
        req.body.Price = mdData.Price;
        req.body.Discount = mdData.Discount;
        req.body.Total = mdData.Price * req.body.Qty;
        mdData.Qty = editQuantity; // Update the quantity in the MedicineModel

        // Save the updated MedicineModel
        await mdData.save();

        // Create a new instance of SelesModel and save it
        const newdata = new SelesModel(req.body);
        await newdata.save();

        res.status(200).send({
            status: true,
            newdata: 'Successfully added!',
            message: 'Successfully posted and updated',
            total: editQuantity
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};