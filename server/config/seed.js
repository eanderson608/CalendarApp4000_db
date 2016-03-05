/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Event from '../api/event/event.model';
import User from '../api/user/user.model';

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Event.find({}).removeAsync()
  .then(() => {
    Event.createAsync({
      title: 'CS407 HW2 Due',
      description: 'CalendarApp4000 due',
      date: new Date(2016, 3, 11),
      time: new Date(2016, 3, 11, 23, 59)
    })
    .then(() => {
      console.log('finished populating users');
    });
  });