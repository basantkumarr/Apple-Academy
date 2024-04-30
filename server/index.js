const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require("./models/user")
const contactModel=require("./models/contact")

const app=express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user");
 
app.post("/contact",(req,res)=>{
    contactModel.create(req.body)
    .then(contacts=>res.json(contacts))
    .catch(err=> res.json(err))    
})
    




app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    UserModel.findOne({email:email}).then(uesr=>{
        if(uesr){
            if(uesr.password===password){
                res.json("success");
            }else{
                res.json("The password is incorrect")
            }

        }
        else{
            res.json("The user does not exist")

        }
    })
})

app.post("/sign",(req,res)=>{
UserModel.create(req.body)
   .then(users=>res.json(users))
   .catch(err=> res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})