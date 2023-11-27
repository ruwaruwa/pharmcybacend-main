const moongoose=require('mongoose');
const ConnectDB= async()=>{
    try {

      //  moongoose.connect("mongodb+srv://amiira123:12345@cluster0.xdvvzfc.mongodb.net/Pharmacy_system")
moongoose.connect('mongodb+srv://amiira123:12345@cluster0.xdvvzfc.mongodb.net/pharmcy_backend');

        console.log('DB Connected !!');

    } catch (error) {
        console.log(error.message)
    }
}
module.exports= ConnectDB;