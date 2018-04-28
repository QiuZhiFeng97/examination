var express = require('express');
var router = express.Router();
var config = require('../mongoConfig');
var mongojs = require('mongojs');



function getData(){
    var connectionString = config.username + ':' + config.pwd + '@' + config.url + '/' + config.db;
    var db = mongojs(connectionString,config.collections);
    var promise = new Promise(function(resolve,reject){
        db.a.find({},function(err,docs){
            resolve(docs);
        });
    });
    return promise;
}

router.get('/',function(req,res){
    getData()
    .then(function success(data){
        res.json(data);
    });
});








module.exports = router;
