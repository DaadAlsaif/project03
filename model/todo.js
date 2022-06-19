const { ObjectId } = require('bson');
const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    
        text:String,
        Tags:[String],
        updated_at:Date,
        created_at:Date,
        user_id:{
            type:mongoose.ObjectId,
            ref:'User'
        },
        is_complete :Boolean
  },{timestamps:true});

  module.exports=mongoose.model('ToDo',todoSchema);