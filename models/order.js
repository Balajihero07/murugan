const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bridename: {
    type: String,
   
  },
  groomname: {
    type: String,
    
  },
  brithdayname: {
        type:String,
  },
  housename:{
    type:String,

  },
  eventname:{
    type:String,
  },
  babyshowername:{
      type:String,
  },
  festivalname:{
    type:String,
  },
  partyname:{
    type:String,
  },
  venue: {
    type: String,
    required: true
  },
  times: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  additionalinformation:{
    type: String
  },
  noofcard: {
    type: Number
  },
  mobileno: {
    type: String
  },
  inputcardno: {
    type: String
  },

},
{ timestamps: true }
);


module.exports = mongoose.model('Order', OrderSchema);
