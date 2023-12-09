// Reserva.model.js
const mysql = require('mysql');
const dbConfig = require('../db.config');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const Reserva = {
  getList: (callback) => {
    connection.query('SELECT * FROM reserva', callback);
  },
  get: (id, callback) => {
    connection.query('SELECT * FROM reserva WHERE id_reserva = ?', [id], callback);
  },
  create: (newReserva, callback) => {
    connection.query('INSERT INTO Reserva SET ?', newReserva, callback);
  },
  update: (id, updatedReserva, callback) => {
    connection.query('UPDATE Reserva SET ? WHERE id_reserva = ?', [updatedReserva, id], callback);
  },
  delete: (id, callback) => {
    connection.query('DELETE FROM Reserva WHERE id_reserva = ?', [id], callback);
  },
};

module.exports = Reserva;