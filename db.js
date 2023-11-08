/** Database for lunchly */

const pg = require("pg");
const DB_URI = "postgresql:///lunchly";
const db = new pg.Client(DB_URI);

db.connect();

module.exports = db;
