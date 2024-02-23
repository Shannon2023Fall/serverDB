import mongoose from "mongoose"; 
const eventSchema = mongoose.Schema({
  id:{
    required: false,
    type: Number
  },
  email:{
    required: true,
    type:String
  }, 
  gender:{
    required: true,
    type:String 
  }, 
  age:{
    required: true,
    type:Number
  }, 
  year:{
    required: true,
    type:Number
  },
  month:{
    required: true,
    type:Number
  },
  day:{
    required: false,
    type:Number
  }
})

//module.exports = mongoose.model("Event", eventSchema)
export default eventSchema;