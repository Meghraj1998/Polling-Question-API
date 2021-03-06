let mongoose = require('mongoose');
//let optionsModel = require('./options.model');
let questionsSchema = mongoose.Schema;


let optionSchema = new questionsSchema({
    
    id:{
        type:String,
        required:true,
        unique:true,

    },

    title: { type: String, unique: true, required: true },
    vote:{
       type:Number,

    },
    
},
 {timestamps: true});


 
let optionModel = mongoose.model("options", optionSchema);

module.exports = optionModel;