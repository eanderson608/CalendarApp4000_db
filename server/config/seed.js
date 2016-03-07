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
      longDate: "2016-02-11 11:59 PM",
      shortDate: "20160311"
    }, {
      title: 'Big Party',
      description: 'a giant rager',
      longDate: "2016-03-11 1:08 PM",
      shortDate: "20160311"
    }, {
      title: 'Appointment',
      description: 'with the party doctor',
      longDate: "2016-03-12 3:30 PM",
      shortDate: "20160312"
    }, {
      title: 'Wild Times',
      description: 'crazy stuff going on',
      longDate: "2016-03-13 1:08 AM",
      shortDate: "20160313"
    })
    .then(() => {
      console.log('finished populating events');
    });
  });