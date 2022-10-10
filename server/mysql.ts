import mysql from "mysql2/promise";
import { PoolOptions } from "mysql2/typings/mysql";

const config: PoolOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "introduce",
};

const pool = mysql.createPool(config);

export default pool;