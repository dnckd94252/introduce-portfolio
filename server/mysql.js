const mysql = require('mysql2');

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "introduce",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const db = mysql.createPool(config);
const promisePool = db.promise();

module.exports = promisePool;