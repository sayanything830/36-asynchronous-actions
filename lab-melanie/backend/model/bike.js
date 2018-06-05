'use strict';

const mongoose = require('mongoose');
const Rider = require('./rider.js');

const Bike = mongoose.Schema({
  'year': {type: Number},
  'color': {type: String},
  'make': {type: String, required: true},
  'category': {type: String, required: true},
  'rider': {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'riders'},
}, {timestamps: true});

// Bike.pre('save', function(next) {
//   Rider.findById(this.rider)
//     .then(rider => {
//       let bikeIdSet = new Set(rider.bikes);
//       bikeIdSet.add(this._id);
//       rider.bikes = [...bikeIdSet];
//     })
//     .then(next)
//     .catch(() => next(new Error('Validation Error. Failed to create track because Album does not exist')));
// });

Bike.pre('save', function(next) {
  Rider.findById(this.rider)
    .then(rider => {
      let bikeIds = new Set(rider.bikes);
      bikeIds.add(this._id);
      rider.bikes = [...bikeIds];
      rider.save();
      // Rider.findByIdAndUpdate(this.rider, {rider: rider.bikes});
    })
    .then(next)
    .catch(() => next(new Error('Validation Error. Failed to save Bike.')));
});
Bike.post('remove', function(doc, next) {
  Rider.findById(doc.rider)
    .then(rider => {
      rider.bikes = rider.bikes.filter(bike => bike.toString() !== doc._id.toString());
      return rider.save();
    })
    .then(next)
    .catch(next);
});

// Bike.post('remove', function(doc, next) {
//   Rider.findById(doc.rider)
//     .then(rider => {
//       rider.bikes = rider.bikes.filter(a => a.toString() !== doc._id.toString());
//       Rider.findByIdAndUpdate(this.rider, {rider: rider.bikes});
//     })
//     .then(next)
//     .catch(next);
// });

module.exports = mongoose.model('bikes', Bike);
