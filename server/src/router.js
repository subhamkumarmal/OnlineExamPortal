const express= require('express');
const router = express.Router();
const cors = require('cors');
const path=require('path');
const publicPath=path.join(__dirname,"../public");

require('../connections/conn');

const strs = require('../Structures/student');
const marks = require('../Structures/marks');

router.use(express.static("../public"));
router.use(express.urlencoded({extended:true}));
router.use(express.json());
router.use(cors());

router.get('/',(req,res)=>{
    res.send("Here you go!!")
})


router.post('/getInfo',async (req,res)=>{
      try{
        const take = await strs.findOne({Name:req.body.Name});
        console.log(take);
        res.json({message:take});

      }catch(errrrr){

      }
})

router.post("/answershit", async(req,res)=>{
 
    try{
        const m = await marks.findOne({IdNo : req.body.Id});
        if(m!=null){
        if(m.Done=="no"){
            m.Done="yes";
            m.Marks=req.body.Marks;
            const result = await m.save();
            console.log(result);
            res.send("Submit")
        }
        else{
         res.send("DonePage")
        }
    }else{
        res.send("Null");
    }
        }catch(err){

    }

   

})



router.post('/data',async (req,res)=>{
      
    try{
        const result = new strs(req.body);
        const saving=await result.save();
        res.send(saving);
    }catch(err){
        console.log("something went wrong in data storing");
    }

})

router.post('/marks',async(req,res)=>{

    try{
       const userMarks = new marks(req.body);
       const result = await userMarks.save();
       res.send(result);
    }
    catch(err){
        res.send("Something went wrong while storing marks");
    }

})




module.exports=router;