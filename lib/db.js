var mysql = require('mysql')
var dbconfig = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'unilab_ors_db_prod'
};


var db = {
    connection : null,
    setup : function() {
        if(this.connection) {
            return;
        } else {
            this.connection = mysql.createConnection(dbconfig);
        }
    },

    query: function(statement, values, callback) {
        if(arguments.length === 2 ) {
            callback = values;
            values = [];
        }
       this.setup();
        var queryOption = {
            sql : statement,
            values: values
        }
        this.connection.query(queryOption, callback)
    }
}

module.exports = db