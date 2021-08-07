var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com', //localhost
  user     : 'WQfNpo5m9d', //root
  password : '02KoeuhBea', //''
  database : 'WQfNpo5m9d' //CLASIFICADOSAPP
});

exports.connection = connection;
