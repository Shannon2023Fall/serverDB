//Use import instead of require
import mongoose from 'mongoose'; 
//Create an event schema
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
});

//module.exports = mongoose.model("Event", eventSchema)
const EventModel = mongoose.model('Event', eventSchema);
export default EventModel;
