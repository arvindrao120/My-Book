import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new Schema({
  name:{
    type:String,
    require:true,
  },
  description:{
    type:String,
    require:true,
  },
  image:{
    type:String,
    require:true,
  },
  Price:{
    type:Number,
    require:true,
  },
  category:{
    type:String,
    require:true
  }
})
const Book = mongoose.model("Book",bookSchema)
export default Book;