const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Phone: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
    Message: { type: String, required: true },
    CreatedOn: { type: Date, default: Date() },
    UpdatedOn: { type: Date, default: Date() },
});

ContactSchema.set('toJSON', { versionKey: false });
module.exports = mongoose.model("Contact", ContactSchema);