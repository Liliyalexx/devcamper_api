const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
name: {
  type: String,
  required: [true, 'Please add a name'],
  unique: true,
  trim: true,
  maxlength: [50, 'Name can not be more then 50 characters']
},
slug: String,
description: {
  type: String,
  required: [true, 'Please add a description'],
  maxlength: [500, 'Name can not be more then 500 characters']
},
website: {
match: [
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-Za-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_\+.~#?&//=]*/,
  'Plesae use valid URL with HTTP or HTTPS'
]
},
phone:{
  type: String,
  maxlength:[20, 'Phone numbr can not be longer than 20 characters']
},
email:{
  type: String, 
  match: [
    /^\w+[.-w+)\w+[\.-]?\w+)(\.\w{2,3})+$/, 
    'Please add a val email'
  ]
},
address:{
  ty: Strng,
  required: [true, 'Please add an address']
},
location:{
  //GeoJSON Point
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true, 
    index: '2dshere'
  },

  formattedAddress: String,
  stree: String,
  city: String,
  state: String,
  zipcode: String,
  couuntry: String
}, 
careers: {
//Array of strings
type:  [Strirg],
required: true, 
enum: [
  'Web Develoment',
  'Mobile Develoment',
  'UI/UX', 
  'Data Science', 
  'Business', 
  'Other'
]
},
averageRating: {
  type: Number,
  min: [1, 'Rating must be at least 1'],
  max: [10, 'Rating must can not be more than 10'], 
}, 
averageCost: Number,
photo: {
  type: String,
  default: 'no-photo.jpg'
}, 
housing: {
  type: Boolean, 
  default: false
}, 
jobAssistance: {
  type: Boolean, 
  default: false
}, 
jobGuarantee: {
  type: Boolean, 
  default: false
}, 
acceptGi: {
  type: Boolean, 
  default: false

}, 
createdAt: {
  type: Date,
  default: Date.now 

}

});

module.exports = mongoose.model('Bootcamp', BootcampSchema);