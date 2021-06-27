
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_ENV,{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase has been connected successfully!");
}).catch((err)=>{
    console.log(err);
    // console.log("Something went wrong!");
})
