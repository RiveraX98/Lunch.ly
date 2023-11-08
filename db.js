/** Database for lunchly */

const pg = require("pg");
const DB_URI = process.env.NODE_ENV || "postgresql:///lunchly";
const db = new pg.Client(DB_URI);

db.connect();

module.exports = db;
