const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    displayName : {
        type: String,
        required: false 
    },


    email :{
        type: String, 
        required: true
    },
    
    birthday: {
        type: Array,
        required: true
    },
    
    password:{
        type: String, required: true
    },

    isAdmin:{
        type: Boolean, default:false
    },
    
    isUser:{
        type: Boolean, default:true
    }

},{
    timestamps: true,
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel