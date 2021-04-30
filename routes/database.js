var mysql = require('mysql');
const config = require('../lib/database/config');

var pool  = mysql.createPool(config.db);

exports.pool = pool;
