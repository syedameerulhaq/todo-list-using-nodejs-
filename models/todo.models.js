import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task:{
    type: String,
    required : [true,"field cannot be empty"],
  },
  completed : {
    type : Boolean,
    default : false
  }
});

export const todoList = mongoose.model('todoList',todoSchema)