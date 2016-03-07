'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  shortDate: String,
  longDate: String
});

export default mongoose.model('Event', EventSchema);
