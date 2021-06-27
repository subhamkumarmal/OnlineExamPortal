require('dotenv').config();
const express =require('express');
const app=express();
const port = process.env.PORT || 4004;
const router=require('../src/router');

app.use(router);

app.listen(port,()=>{
    console.log(`The server is running at port no ${port}`);
})