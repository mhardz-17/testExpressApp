var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.query('SELECT * FROM employees LIMIT 10 ORDER BY firstname ASC', function (err, results) {
        //console.log(err);
        //console.log(results);
        var response = {users: [], hasError: false,msg: ''};
        if (err) {
            response.hasError = true;
            response.hasError = 'There is problem in the server.';
        } else {
            response.users = results;
        }

        res.format({
            json: function () {
                res.send(response)
            }
        })
    })
});

router.get('/search', function (req, res, next) {
    var body = req.body;

    console.log(body)

    //db.query('SELECT * FROM employees LIMIT 10 ORDER BY firstname ASC', function (err, results) {
    //    //console.log(err);
    //    //console.log(results);
    //    var response = {users: [], hasError: false,msg: ''};
    //    if (err) {
    //        response.hasError = true;
    //        response.hasError = 'There is problem in the server.';
    //    } else {
    //        response.users = results;
    //    }
    //
    //    res.format({
    //        json: function () {
    //            res.send(response)
    //        }
    //    })
    //})
});

router.get('/:id', function (req, res, next) {

    var users = [];
    var id = req.param.id;
    if(!id) {
        res.format({
            json: function () {
                res.send({hasError: true,msg: 'Id does not exists.'})
            }
        })
    } else {
        db.query('SELECT * FROM employees WHERE id = ?', [id], function (err, results) {
            //console.log(err);
            //console.log(results);
            var response = {user: [], hasError: false,msg: ''};
            if (err) {
                response.hasError = true;
                response.hasError = 'There is problem in the server.';
            } else {
                response.user = results;
            }

            res.format({
                json: function () {
                    res.send(response)
                }
            })
        })
    }
});

module.exports = router;
