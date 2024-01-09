// Reserva.model.js
const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();
 
const Empleado = {
    getList: (callback) => {
      connection.query('SELECT * FROM empleado_bar', callback);
    },
    get: (id, callback) => {
      connection.query('SELECT * FROM empleado_bar WHERE id_empleado_bar = ?', [id], callback);
    },
    create: (newUser, callback) => {
      connection.query('INSERT INTO empleado_bar SET ?', newUser, callback);
    },
    update: (id, updatedUser, callback) => {
      connection.query('UPDATE empleado_bar SET ? WHERE id_empleado_bar = ?', [updatedUser, id], callback);
    },
    delete: (id, callback) => {
      connection.query('DELETE FROM empleado_bar WHERE id_empleado_bar = ?', [id], callback);
    },
};
  

module.exports =  Empleado;
 