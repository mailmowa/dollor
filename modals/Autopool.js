const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

//create Schema
const AutopoolSchema = new newSchema({

    userId: {
        type: String,
        required:true
    },
    poolOneCompleted: {
        type: Boolean,
        required:true
    },
    members: {
        type: Array,
        required: true
    },
    referedBy: {
        type: String,
        required: true
    },
    levelOne: {
        type: Number,
        required: true
    },
    levelOneIncome: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required:true
    },
    date: {
    type:Date,
    default: new Date()
    }
})

module.exports = Autopool = mongoose.model('Autopool',AutopoolSchema);