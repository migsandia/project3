const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title:{
    type: String,
    require : true
  },
  description: {
    type: String,
    require : true
  },
  imageUrl: {
    type: String,
  },
  ageRange: {
    type: String,
    enum: ['18-25','25-30','30-40','40-50','+50']
  },
  date: {
    type: Date,
    require : true
  },
  numberPersons:{
    type: Number,
    require : true
  },
  route: {
    type: String,
    require : true
  },
  favorites:{
    type: Number,
    require: true
  },
  itinerary:{
    type: String,
    require: true
  },
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;