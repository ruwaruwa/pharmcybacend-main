const express =require('express');
const report=express.Router();
const {findtDates}=require('../Contrallers/Reportcontroler')
report.post('/',findtDates)
module.exports=report