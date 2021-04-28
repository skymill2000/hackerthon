var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '1q2w3e4r',
    database : 'hackerthon',
});

exports.pool = pool;
