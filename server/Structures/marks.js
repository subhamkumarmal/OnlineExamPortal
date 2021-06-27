const mongoose = require('mongoose');

const mStr =  mongoose.Schema({
    Name : String,
    IdNo : Number,
    Marks : String,
    Done : String 
})

const marks = mongoose.model("mark",mStr);

module.exports=marks;