const  mongoose=require("mongoose");


const contactSchema=new mongoose.Schema({
    name:String,
    lastName:String,
    address:String,
    mobile:String,
    goal:String,
    mode:String,
 
})

const contactModel=mongoose.model("contacts",contactSchema);

module.exports=contactModel;