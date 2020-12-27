const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

//create Schema
const Contact = new newSchema({
  
    
    username:{
        type: String,
        required:true
    },
    mail:{
        type: String,
        required:true
    },
    message:{
        type: String,
        required:true
    },
    date: {
        type: String,
        required: true
    }



})

module.exports = contact = mongoose.model('Contact',Contact);