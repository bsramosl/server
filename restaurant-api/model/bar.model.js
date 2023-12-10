const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const Bar = {
  getList: (callback) => {
    connection.query('SELECT * FROM bar', callback);
  },
  get: (id, callback) => {
    connection.query('SELECT * FROM bar WHERE id_bar = ?', [id], callback);
  },
  create: (newBar, callback) => {
    connection.query('INSERT INTO bar SET ?', newBar, callback);
  },
  update: (id, updatedBar, callback) => {
    connection.query('UPDATE bar SET ? WHERE id_bar = ?', [updatedBar, id], callback);
  },
  delete: (id, callback) => {
    connection.query('DELETE FROM bar WHERE id_bar = ?', [id], callback);
  },
};

module.exports = Bar;