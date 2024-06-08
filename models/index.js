const Mongoose = require("mongoose");
// var env = process.env.NODE_ENV || "dev";
// var config = require(`../Config/${env}.config`);
const { DB_URL } = process.env;
const connectionString=DB_URL
const contacts =require('./contact')
const bootstrap=()=>{
    Mongoose.connect(connectionString, { useNewUrlParser:true, useUnifiedTopology:true})
    .then( con=>{console.error(" Connection Successful  "+connectionString);})
    .catch( err=>{console.error(" Failed To Connect to Db " + err);}); 
    
    Mongoose.Promise = global.Promise; 
}

module.exports= {bootstrap}
 

