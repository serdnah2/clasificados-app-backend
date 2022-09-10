var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com', //localhost
  user     : 'iE4Lgju342', //root
  password : '9FpYZah9wM', //''
  database : 'iE4Lgju342' //CLASIFICADOSAPP
});

exports.connection = connection;
