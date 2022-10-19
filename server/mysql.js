const mysql = require('mysql');

const config= {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "introduce",
};

const pool = mysql.createPool(config);

module.exports = pool;