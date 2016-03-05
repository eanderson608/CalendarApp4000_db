'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  time: Date
});

export default mongoose.model('Event', EventSchema);
