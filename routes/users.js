var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.query('SELECT * FROM employees LIMIT 10', function (err, results) {
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

router.get('/get/:id', function (req, res, next) {
    //var users = [{firstname: 'Mardy', middlename: 'Artisano', lastname: 'dela Cruz'},
    //    {firstname: 'Mardy', middlename: 'Artisano', lastname: 'dela Cruz'},
    //    {firstname: 'Mardy', middlename: 'Artisano', lastname: 'dela Cruz'}];
    var users = [];
    db.query('SELECT * FROM employees LIMIT 10', function (err, results) {
        //console.log(err);
        //console.log(results);
        if (err) {
            console.log(err)
            users = [];
            res.render('users/index', {title: 'Show User', users: []})
        } else {
            res.render('users/index', {title: 'Show User', users: results})
        }
    })

})

module.exports = router;
