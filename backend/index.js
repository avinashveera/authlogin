import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
mongoose.connect("mongodb://localhost:27017/myLoginregisterDB",{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('mongodb connected')
})

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    
})

const User=new mongoose.model("user",userSchema)



//Routes
app.post('/login',(req,res)=>{
    const {name,password}=req.body;

    const ff=User.findOne({name:name,password:password},(err,doc)=>{
        if(doc){
            res.send({message:"login successfull",doc:doc})

        }else{
            console.log("doc not match")
        }
    })

})

app.post('/resister',(req,res)=>{
 
  const  {name,email,password}=req.body

  const FF=User.findOne({email:email},(err,doc)=>{

   if(doc){
       res.send({message:"this user is alreay exist"})
   }else{

    const user =new User({
        name,
        email,
        password
    })


    user.save((err)=>{
        if(err){
          res.send({message:"user not saved"})
        }else{
            res.send({message:"user successfully resistered"});
        }
    }) 


   }

  })

})
//routes
app.listen(5000,()=>{
    console.log('port is running on port 5000')
})