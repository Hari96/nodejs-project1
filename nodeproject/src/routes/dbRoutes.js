var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ {
    name: 'Event1',
    description: 'The first event',
    date: '2016.01.01',
    time: '1:00pm',
    duration: '1 Hour',
    location: {
        streetAddr: '96 Main St.',
        city: 'Ashford',
        county: 'Kent',
        postCode: 'TN23 4YZ',
        lon: 0,
        lat: 0
    },
    capacity: 100
  },
  {
    name: 'Event2',
    description: 'The second event',
    date: '2016.02.02',
    time: '2:00pm',
    duration: '2 Hours',
    location: {
        streetAddr: '6 Main St.',
        city: 'Ashford',
        county: 'Kent',
        postCode: 'TN23 5RT',
        lon: 0,
        lat: 0
    },
    capacity: 200
 },
 {
    name: 'Event3',
    description: 'The third event',
    date: '2016.03.03',
    time: '3:00pm',
    duration: '3 Hours',
    location: {
        streetAddr: '36 Main St.',
        city: 'Ashford',
        county: 'Kent',
        postCode: 'TN23 7DE',
        lon: 0,
        lat: 0
    },
    capacity: 300
 },
 { 
 name: 'Event4',
    description: 'The fourth event',
    date: '2016.04.04',
    time: '4:00pm',
    duration: '4 Hours',
    location: {
        streetAddr: '56 Main St.',
        city: 'Ashford',
        county: 'Kent',
        postCode: 'TN23 9TS',
        lon: 0,
        lat: 0
    },
    capacity: 400
  }
];

dbRouter.route('/AddEventData')
.get(function(req, res){
    var url = 'mongodb://localhost:27017/eventsApp';
    mongodb.connect(url, function(err, db) {
        var collection = db.collection('events');
        collection.insertMany(eventsData, function(err, results){
            res.send(results);
            db.close();
        });
    }); 
});

module.exports = dbRouter;