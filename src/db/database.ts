const sqlite3 = require('sqlite3');

export const db = new sqlite3.Database('db.sqlite');

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);
