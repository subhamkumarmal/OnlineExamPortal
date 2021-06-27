const mongoose=require('mongoose');

const str=mongoose.Schema({
    Name:String,
    Sex:String,
    Phone:String,
    Password:String,
})

const tables =mongoose.model('detail',str);

module.exports=tables;