const contactSchema = require("../models/contact");
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;

const createContactService =  async (request)=>{
    const {Name,Phone,Email,Message}=request;
    const response = await contactSchema.create({ 
        Name,Phone,Email,Message
     });
    return response;
}


module.exports = {
    createContactService
}