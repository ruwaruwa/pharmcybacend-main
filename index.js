const express= require('express');
const app= express();
const ConnectDB=require('./DB_Config/Connection');
ConnectDB();
const category=require('./Routers/CategoryRoute')
const med=require('./Routers/medicinerouter')
const seles=require('./Routers/selesrouter')
const users=require('./Routers/Userrouter')
const login=require('./Routers/loginrouter');
const report=require('./Routers/reportrouter')
const expense=require('./Routers/expresrouter');
const cat_exp=require('./Routers/catexpresroute')
// const authent=require('./AUthentications/middleware');
app.use(express.json());
//midleware

//
app.use('/category',category)
app.use('/store',med);
app.use('/seles',seles);
app.use('/report',report)
app.use('/expense',expense)
app.use('/cat_expenses',cat_exp)
app.use('/users',users)
app.use('/login',login)

app.get('/',(req,res)=>{
    res.send('server started !!')
});

app.listen(1000,async()=>{
    console.log('app started at port 100');

});