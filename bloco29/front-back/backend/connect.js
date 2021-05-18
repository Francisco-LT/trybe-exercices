const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '120658',
  host: 'localhost',
  database: 'albuns'
});

module.exports = connection;