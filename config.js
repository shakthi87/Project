const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_user,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.getConnection((error) => {
  if (error) throw error;
  console.log("DataBase connected");
});

module.exports = pool;
