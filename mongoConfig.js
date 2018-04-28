var mongojs = require('mongojs');

var config = {

    // your mongoDB specified db username
    username:'username',

    // specified db password
    pwd:'password',

    // remote or local db
    url:'127.0.0.1',

    // db name
    db:'db name',

    // collections array
    collections:['collection1','collection2']
};




module.exports = config;
